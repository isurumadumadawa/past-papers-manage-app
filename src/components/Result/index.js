import React from 'react';

import colors from '../../config/colors';
import {
  Screen,
  Header,
  SubHeader,
  Divider,
  ContentWrapper,
  ContentInnerWrapper,
  ButtonWrapper,
  ButtonText,
  ProgessBarWrapper,
  ProgessBarTextContainer,
  ProgessBarText,
  ProgessBar,
  ProgessInnerBar,
} from './styles';

export default Result = ({data = []}) => {
  return (
    <Screen>
      <ContentWrapper>
        <Header>Results</Header>
        <Divider />
        {data.map((item, index) => (
          <ContentInnerWrapper key={index}>
            <SubHeader>{item.subjectName}</SubHeader>
            <Divider />
            <ProgessBarWrapper>
              <ProgessBar>
                <ProgessInnerBar presentage={item.presentage} />
              </ProgessBar>
              <ProgessBarTextContainer>
                <ProgessBarText>{item.presentage + ' %'}</ProgessBarText>
              </ProgessBarTextContainer>
            </ProgessBarWrapper>
            <ButtonWrapper>
              <ButtonText>Tutorial >></ButtonText>
            </ButtonWrapper>
          </ContentInnerWrapper>
        ))}
      </ContentWrapper>
    </Screen>
  );
};
