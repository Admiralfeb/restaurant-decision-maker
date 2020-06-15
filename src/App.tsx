import React from 'react';
import './App.scss';

import { UserInput } from './components';
import { UserInputModel } from './models';

export default class App extends React.Component {
  userSubmit(userInput: UserInputModel) {}

  render() {
    return (
      <div className='App'>
        <UserInput onSubmit={() => this.userSubmit} />
      </div>
    );
  }
}
