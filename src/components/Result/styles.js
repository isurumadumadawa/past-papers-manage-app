import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

//Screen

export const Screen = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${colors.backGround};
`;

//Header

export const Header = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 32px;
`;

export const SubHeader = styled(Header)`
  font-weight: 400;
  font-size: 24px;
`;

//Divider
export const Divider = styled.View`
  border-top-color: ${colors.white};
  border-top-width: 1px;
  height: 20px;
`;

//Content Wrapper
export const ContentWrapper = styled.ScrollView`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: ${colors.content};
  border-radius: 20px;
`;

export const ContentInnerWrapper = styled.View`
  margin-bottom: 30px;
  padding-horizontal: 20px;
  border-radius: 20px;
  background-color: ${colors.primary};
`;

//Button

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding-vertical: 10px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 10px;
  width: 50%;
`;

export const ButtonText = styled.Text`
  color: ${colors.backGround};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

export const ProgessBarWrapper = styled.View`
  flex-direction: row;
  justify-conteent: center;
  align-items: center;
`;

export const ProgessBarTextContainer = styled.View`
  flex: 1;
  justify-conteent: center;
  align-items: center;
`;

export const ProgessBarText = styled.Text`
  color: ${colors.backGround};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

export const ProgessBar = styled.View`
  flex:4; 
  border: 1px;
  border-radius: 10px;
  border-color:${colors.backGround}
  height: 15px;
   
`;

export const ProgessInnerBar = styled.View`
  background-color: ${colors.backGround};
  border: 1px;
  border-radius: 10px;
  border-color:${colors.backGround}
  height: 15px;
  width:${props => props.presentage + '%'}
`;
