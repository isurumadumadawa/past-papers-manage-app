import React from 'react';

import colors from '../../config/colors';
import {
  Screen,
  Header,
  Divider,
  ContentWrapper,
  FeildWrapper,
  Label,
  MessageSuccess,
  MessageError,
  Input,
  ButtonWrapper,
  ButtonWrapperOutline,
  ButtonText,
  ButtonTextOutline,
} from './styles';

export default Select = ({
  onPressLogin = () => {},
  onPressRegister = () => {},
  onPressResetPassword = () => {},
  onChangeUserName = text => {},
  onchangePassword = text => {},
  header = 'Sign In',
  userNameLabel = 'User Name',
  userNameMessage = '',
  userNameMessageType = '',
  passwordLabel = 'Password',
  passwordMessage = '',
  passwordMessageType = '',
  userName = '',
  password = '',
  userNameplaceholder = 'Enter User Name',
  passwordPlaceholder = 'Enter Pasword',
  loginButtonText = 'SignIn',
  registerButtonText = 'SignUp',
}) => {
  return (
    <Screen>
      <ContentWrapper>
        <Header>{header}</Header>
        <Divider />
        <FeildWrapper>
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
        <ButtonWrapper onPress={onPressLogin}>
          <ButtonText>{loginButtonText}</ButtonText>
        </ButtonWrapper>
        <ButtonWrapperOutline onPress={onPressRegister}>
          <ButtonTextOutline>{registerButtonText}</ButtonTextOutline>
        </ButtonWrapperOutline>
      </ContentWrapper>
    </Screen>
  );
};
