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
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: ${colors.content};
  border-radius: 20px;
`;

export const ScrollViewContent = styled.ScrollView`
  flex: 1;
  background-color: ${colors.content};
  border-radius: 20px;
`;

//Button

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 7px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const Bullet = styled.View`
  border-color: ${colors.white};
  border-width: 2px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-left: 20px;
`;
