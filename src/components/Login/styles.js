import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

//Screen

export const Screen = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${colors.backGround};
  justify-content: center;
`;

//Header

export const Header = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 32px;
`;

//Divider
export const Divider = styled.View`
  border-top-color: ${colors.white};
  border-top-width: 1px;
  height: 20px;
`;

//Content Wrapper
export const ContentWrapper = styled.View`
  margin: 10px;
  padding: 20px;
  background-color: ${colors.content};
  border-radius: 20px;
`;

//Input Wrapper

export const FeildWrapper = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MessageText = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
`;

export const MessageSuccess = styled(MessageText)`
  color: ${colors.success};
`;

export const MessageError = styled(MessageText)`
  color: ${colors.error};
`;

//Input

export const Input = styled.TextInput`
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.white};
  color: ${colors.white};
`;

//Button

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 7px;
`;

export const ButtonWrapperOutline = styled(ButtonWrapper)`
  background-color: transparent;
  border-color: ${colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonTextOutline = styled(ButtonText)`
  color: ${colors.primary};
`;
