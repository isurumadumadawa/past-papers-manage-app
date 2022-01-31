import React from 'react';

import colors from '../../config/colors';
import {
  Screen,
  ScrollViewScreen,
  Header,
  Divider,
  RowWContainer,
  MobileNumberCountyContainer,
  MobileNumberCounrtyLabel,
  FeildWrapperRow,
  FeildWrapper,
  Label,
  MessageSuccess,
  MessageError,
  Input,
  FlexInput,
  ButtonWrapper,
  GenderButtonWrapper,
  GenderButtonWrapperOutline,
  ButtonText,
  ButtonTextOutline,
  UserImage,
  RowWContainerImage,
} from './styles';

export default Register = ({
  onPressRegister = () => {},
  onPressGender = text => {},
  onPressMobileCounrty = () => {},
  onChangeUserName = text => {},
  onChangeMobilrNumber = text => {},
  onchangePassword = text => {},
  onChangeConformPassword = text => {},
  header = 'Add User',
  userNameLabel = 'User Name',
  userNameMessage = '',
  userNameMessageType = '',
  mobileNumberCountyLabel = '+94',
  mobileNumberLabel = 'Mobile Number',
  mobileNumberMessage = '',
  mobileNumberMessageType = '',
  genderLabel = 'Gender',
  passwordLabel = 'Password',
  passwordMessage = '',
  passwordMessageType = '',
  conformPasswordLabel = 'Conform Password',
  conformPasswordMessage = '',
  conformPasswordMessageType = '',
  userName = '',
  mobileNumber = '',
  gender = 'Male',
  genderValues = {male: 'Male', female: 'Female'},
  password = '',
  conformPassword = '',
  userNameplaceholder = 'Enter User Name',
  mobileNumbePlaceholder = 'Enter Mobile Number',
  passwordPlaceholder = 'Enter Pasword',
  conformPasswordPlaceholder = 'Enter Password Again',
  registerButtonText = 'Add User',
  userImageUrl = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBeP9fTqK8Whnb5-spIqngvUWPCucMHZAcv9CPzte8nP-oWJ91FtSrOnzsgNiYOd-fao&usqp=CAU',
  },
}) => {
  return (
    <Screen>
      <ScrollViewScreen showsVerticalScrollIndicator={false}>
        <Header>{header}</Header>
        <Divider />
        <RowWContainer>
          <FeildWrapperRow>
            <Label>{userNameLabel}</Label>
            <Input
              placeholder={userNameplaceholder}
              value={userName}
              placeholderTextColor={colors.white}
              onChangeText={text => onChangeUserName(text)}
            />
            {userNameMessageType == 'error' && (
              <MessageError>{userNameMessage}</MessageError>
            )}
            {userNameMessageType == 'success' && (
              <MessageSuccess>{userNameMessage}</MessageSuccess>
            )}
          </FeildWrapperRow>
        </RowWContainer>

        <FeildWrapper>
          <Label>{mobileNumberLabel}</Label>
          <RowWContainer>
            <MobileNumberCountyContainer onPress={onPressMobileCounrty}>
              <MobileNumberCounrtyLabel>
                {mobileNumberCountyLabel}
              </MobileNumberCounrtyLabel>
            </MobileNumberCountyContainer>
            <FlexInput
              placeholder={mobileNumbePlaceholder}
              value={mobileNumber}
              placeholderTextColor={colors.white}
              onChangeText={text => onChangeMobilrNumber(text)}
              keyboardType="number-pad"
            />
          </RowWContainer>
          {mobileNumberMessageType == 'error' && (
            <MessageError>{mobileNumberMessage}</MessageError>
          )}
          {mobileNumberMessageType == 'success' && (
            <MessageSuccess>{mobileNumberMessage}</MessageSuccess>
          )}
        </FeildWrapper>

        <FeildWrapper>
          <Label>User Images</Label>

          <RowWContainerImage horizontal showsHorizontalScrollIndicator={false}>
            <UserImage source={userImageUrl} />
            <UserImage source={userImageUrl} />
            <UserImage source={userImageUrl} />
            <UserImage source={userImageUrl} />
            <UserImage source={userImageUrl} />
          </RowWContainerImage>
        </FeildWrapper>

        <ButtonWrapper onPress={onPressRegister}>
          <ButtonText>{registerButtonText}</ButtonText>
        </ButtonWrapper>
      </ScrollViewScreen>
    </Screen>
  );
};
