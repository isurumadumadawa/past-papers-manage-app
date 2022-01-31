import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';

//Card

export const CardWrapper = styled.View`
  margin: 10px;
  flex-direction: row;
  height: 120px;
  background-color: ${colors.primary};
  padding-vertical: 14px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.primary};
  align-items: center;
`;

export const CardWrapperOutline = styled(CardWrapper)`
  background-color: transparent;
  border-color: ${props => (props.isValid ? colors.primary : colors.error)};
`;

export const CardInnerNumberWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 6px;
  // border-width: 1px;
  // border-color: ${colors.primary};
`;
export const CardInnerAnswerWrapper = styled.View`
  flex: 2;

  height: 120px;
  background-color: transparent;
  border-radius: 6px;
  padding-left: 20px;
`;

//UserImage

export const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

//User Name

export const UserName = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  margin-top: 10px;
`;

//Time

export const TimeHeader = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  margin-top: 10px;
`;
