import React from 'react';
import {ButtonWrapper, ButtonText, Screen} from './styles';

export default function Header({
  registerButtonText = '+ Add New User',
  doorOpenText = 'Open',
  doorCloseText = 'Close',
  doorStatus = true,
  onPressRegister = () => {},
  onPressDoor = () => {},
}) {
  return (
    <Screen>
      <ButtonWrapper isClosed={doorStatus} onPress={onPressDoor}>
        <ButtonText>{doorStatus ? doorCloseText : doorOpenText}</ButtonText>
      </ButtonWrapper>
      <ButtonWrapper onPress={onPressRegister}>
        <ButtonText>{registerButtonText}</ButtonText>
      </ButtonWrapper>
    </Screen>
  );
}
