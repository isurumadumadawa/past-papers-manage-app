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
} from './styles';

export default Register = ({
  onPressRegister = () => {},
  onPressGender = text => {},
  onPressMobileCounrty = () => {},
  onChangeUserName = text => {},
  onChangeMobilrNumber = text => {},
  onchangePassword = text => {},
  onChangeConformPassword = text => {},
  header = 'Sign Up',
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
  registerButtonText = 'SignUp',
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
          <Label>{genderLabel}</Label>
          {gender == genderValues.male && (
            <RowWContainer>
              <GenderButtonWrapper onPress={onPressGender(genderValues.male)}>
                <ButtonText>{genderValues.male}</ButtonText>
              </GenderButtonWrapper>
              <GenderButtonWrapperOutline
                onPress={onPressGender(genderValues.female)}>
                <ButtonTextOutline>{genderValues.female}</ButtonTextOutline>
              </GenderButtonWrapperOutline>
            </RowWContainer>
          )}
          {gender == genderValues.female && (
            <RowWContainer>
              <GenderButtonWrapperOutline
                onPress={onPressGender(genderValues.male)}>
                <ButtonTextOutline>{genderValues.male}</ButtonTextOutline>
              </GenderButtonWrapperOutline>
              <GenderButtonWrapper onPress={onPressGender(genderValues.female)}>
                <ButtonText>{genderValues.female}</ButtonText>
              </GenderButtonWrapper>
            </RowWContainer>
          )}
        </FeildWrapper>
        <FeildWrapper>
          <Label>{passwordLabel}</Label>
          <Input
            placeholder={passwordPlaceholder}
            value={password}
            placeholderTextColor={colors.white}
            onChangeText={text => onchangePassword(text)}
            secureTextEntry
          />
          {passwordMessageType == 'error' && (
            <MessageError>{passwordMessage}</MessageError>
          )}
          {passwordMessageType == 'success' && (
            <MessageSuccess>{passwordMessage}</MessageSuccess>
          )}
        </FeildWrapper>
        <FeildWrapper>
          <Label>{conformPasswordLabel}</Label>
          <Input
            placeholder={conformPasswordPlaceholder}
            value={conformPassword}
            placeholderTextColor={colors.white}
            onChangeText={text => onChangeConformPassword(text)}
            secureTextEntry
          />
          {conformPasswordMessageType == 'error' && (
            <MessageError>{conformPasswordMessage}</MessageError>
          )}
          {conformPasswordMessageType == 'success' && (
            <MessageSuccess>{conformPasswordMessage}</MessageSuccess>
          )}
        </FeildWrapper>

        <ButtonWrapper onPress={onPressRegister}>
          <ButtonText>{registerButtonText}</ButtonText>
        </ButtonWrapper>
      </ScrollViewScreen>
    </Screen>
  );
};
