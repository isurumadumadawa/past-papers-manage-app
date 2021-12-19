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
  font-size: 25px;
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

export const ButtonWrapper = styled.View`
  flex-direction: row;
  height: 80px;
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  align-items: center;
  margin-bottom: 10px;
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
export const ButtonInnerNumberWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  height: 80px;
  justify-content: center;
  background-color: transparent;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
`;
export const ButtonInnerAnswerWrapper = styled(ButtonInnerNumberWrapper)`
  flex: 5;
`;

export const AnswerContainer = styled.View`
  flex: 1;
`;

export const AnswerInnerContainer = styled.TouchableOpacity`
  background-color: ${props => (props.color ? props.color : colors.white)};
  margin: 10px;
  border-radius: 6px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const AnswerNumber = styled.Text`
  color: ${colors.black};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
`;

export const QuestionNumber = styled(AnswerNumber)`
  color: ${colors.white};
`;

export const SubmitButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  margin-vertical: 7px;
`;
