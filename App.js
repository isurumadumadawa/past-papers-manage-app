/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Register from './src/components/Register';
import Login from './src/components/Login';
import Select from './src/components/Select';
import Paper from './src/components/Paper';
import Result from './src/components/Result';

const App = () => {
  return (
    <Login />
    // <Register />
    // <Select />
    // <Paper
    //   questionsData={[
    //     {QuestionNumber: 1, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 2, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 3, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 4, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 5, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 6, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 7, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 8, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 9, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 10, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 11, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 12, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 13, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 14, answer: 3, selectedAnswer: ''},
    //     {QuestionNumber: 15, answer: 3, selectedAnswer: ''},
    //   ]}
    // />
    // <Result
    //   data={[
    //     {subjectName: 'Fundementals', presentage: 37},
    //     {subjectName: 'Interduction', presentage: 67},
    //     {subjectName: 'Fundementals', presentage: 37},
    //     {subjectName: 'Fundementals', presentage: 37},
    //   ]}
    // />
  );
};

export default App;
