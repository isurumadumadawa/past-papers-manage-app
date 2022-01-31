import React, {useState} from 'react';

import {Screen} from './styles';

import Login from '../../components/Login';

export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = text => {
    setUserName(text);
  };

  const onchangePassword = text => {
    setPassword(text);
  };

  return (
    <Screen>
      <Login
        onPressLogin={() => navigation.navigate('Home')}
        onPressRegister={() => {}}
        onChangeUserName={onChangeUserName}
        onchangePassword={onchangePassword}
        header="Sign In"
        userNameLabel="User Name"
        userNameMessage=""
        userNameMessageType=""
        passwordLabel="Password"
        passwordMessage=""
        passwordMessageType=""
        userName={userName}
        password={password}
        userNameplaceholder="Enter User Name"
        passwordPlaceholder="Enter Pasword"
        loginButtonText="LogIn"
        registerButtonText="User Registration"
      />
    </Screen>
  );
}
