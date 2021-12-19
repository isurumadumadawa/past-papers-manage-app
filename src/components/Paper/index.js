import React, {useState} from 'react';

import colors from '../../config/colors';
import {
  Screen,
  Header,
  Divider,
  ContentWrapper,
  ScrollViewContent,
  ButtonWrapperOutline,
  ButtonInnerNumberWrapper,
  ButtonInnerAnswerWrapper,
  AnswerContainer,
  AnswerInnerContainer,
  QuestionNumber,
  AnswerNumber,
  SubmitButtonWrapper,
  ButtonText,
} from './styles';

export default Paper = ({
  onSubmit = () => {},
  header = 'Enter Your Answers',
  questionsData = [],
}) => {
  const [data, setData] = useState(questionsData);

  const onChangeAnswer = (index, answer) => {
    console.log(index, answer);
    const newData = JSON.parse(JSON.stringify(data));
    newData[index] = {...newData[index], ...{selectedAnswer: answer}};

    setData(newData);
  };

  return (
    <Screen>
      <ContentWrapper>
        <Header>{header}</Header>
        <Divider />
        <ScrollViewContent>
          {data.map((item, index) => (
            <ButtonWrapperOutline key={index}>
              <ButtonInnerNumberWrapper>
                <QuestionNumber>{index + 1}</QuestionNumber>
              </ButtonInnerNumberWrapper>
              <ButtonInnerAnswerWrapper>
                <AnswerContainer>
                  <AnswerInnerContainer
                    color={
                      item.selectedAnswer == 1 ? colors.primary : colors.white
                    }
                    onPress={() => onChangeAnswer(index, 1)}>
                    <AnswerNumber>1</AnswerNumber>
                  </AnswerInnerContainer>
                </AnswerContainer>
                <AnswerContainer>
                  <AnswerInnerContainer
                    color={
                      item.selectedAnswer == 2 ? colors.primary : colors.white
                    }
                    onPress={() => onChangeAnswer(index, 2)}>
                    <AnswerNumber>2</AnswerNumber>
                  </AnswerInnerContainer>
                </AnswerContainer>
                <AnswerContainer>
                  <AnswerInnerContainer
                    color={
                      item.selectedAnswer == 3 ? colors.primary : colors.white
                    }
                    onPress={() => onChangeAnswer(index, 3)}>
                    <AnswerNumber>3</AnswerNumber>
                  </AnswerInnerContainer>
                </AnswerContainer>
                <AnswerContainer>
                  <AnswerInnerContainer
                    color={
                      item.selectedAnswer == 4 ? colors.primary : colors.white
                    }
                    onPress={() => onChangeAnswer(index, 4)}>
                    <AnswerNumber>4</AnswerNumber>
                  </AnswerInnerContainer>
                </AnswerContainer>
                <AnswerContainer>
                  <AnswerInnerContainer
                    color={
                      item.selectedAnswer == 5 ? colors.primary : colors.white
                    }
                    onPress={() => onChangeAnswer(index, 5)}>
                    <AnswerNumber>5</AnswerNumber>
                  </AnswerInnerContainer>
                </AnswerContainer>
              </ButtonInnerAnswerWrapper>
            </ButtonWrapperOutline>
          ))}
          <SubmitButtonWrapper>
            <ButtonText>Submit</ButtonText>
          </SubmitButtonWrapper>
        </ScrollViewContent>
      </ContentWrapper>
    </Screen>
  );
};
