import React from 'react';

import colors from '../../config/colors';
import {
  Screen,
  Header,
  Divider,
  ContentWrapper,
  ScrollViewContent,
  ButtonWrapper,
  ButtonText,
  Bullet,
} from './styles';

export default Select = ({
  onSelectSubject = () => {},
  header = 'Select Year',
  subjectData = ['Cobmined Maths', 'Biology', 'ICT', 'Chemestry', 'Physics'],
  yearData = [
    '2021 A/L PAPER I',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
  ],
}) => {
  return (
    <Screen>
      <ContentWrapper>
        <Header>{header}</Header>
        <Divider />
        <ScrollViewContent>
          {yearData.map((item, index) => (
            <ButtonWrapper onPress={onSelectSubject} key={index}>
              <Bullet />
              <ButtonText>{item}</ButtonText>
            </ButtonWrapper>
          ))}
        </ScrollViewContent>
      </ContentWrapper>
    </Screen>
  );
};
