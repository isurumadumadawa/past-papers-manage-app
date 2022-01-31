import React from 'react';

import styled from 'styled-components/native';

import colors from '../../config/colors';
//Screen

export const Screen = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

//Button

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${props =>
    props.isClosed ? colors.error : colors.primary};
  border-radius: 6px;
  border-width: 1px;
  border-color: ${props => (props.isClosed ? colors.error : colors.primary)};
  margin: 7px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 40px;
`;
