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
export const ScrollViewScreen = styled.ScrollView`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: ${colors.content};
  border-radius: 20px;
`;

//Header

export const Header = styled.Text`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 32px;
`;

//Divider
export const Divider = styled.View`
  border-top-color: ${colors.white};
  border-top-width: 1px;
  height: 20px;
`;
//nameInput container
export const RowWContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

//mobile number Wrapper
export const MobileNumberCountyContainer = styled.TouchableOpacity`
  margin-right: 20px;
  border-width: 1px;
  border-color: ${colors.white};
  width: 80px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const MobileNumberCounrtyLabel = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;

//Input Wrapper
export const FeildWrapperRow = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FeildWrapper = styled.View`
  margin-top: 10px;
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
export const FlexInput = styled(Input)`
  flex: 1;
`;

//Button

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 20px;
`;

export const GenderButtonWrapper = styled(ButtonWrapper)`
  width: 110px;
  height: 45px;
  padding-vertical: 10px;
  margin-right: 20px;
  border-radius: 30px;
  margin-vertical: 0px;
`;

export const GenderButtonWrapperOutline = styled(GenderButtonWrapper)`
  background-color: transparent;
  border-color: ${colors.border};
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

export const RowWContainerImage = styled.ScrollView`
  flex-direction: row;
`;

export const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin: 10px;
`;
