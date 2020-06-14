import React from 'react';
import './App.scss';

import { UserInput } from './components';
import { UserInputModel } from './models';

export default function App() {
  const userSubmit = (userInput: UserInputModel) => {};

  return (
    <div className='App'>
      <UserInput onSubmit={userSubmit} />
    </div>
  );
}
