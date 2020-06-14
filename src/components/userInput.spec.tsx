import React from 'react';
import { render } from '@testing-library/react';
import { UserInput } from './userInput';

test('renders userInput', () => {
  const { getByText } = render(<UserInput onSubmit={(userInput) => {}} />);
  const linkElement = getByText(/userinput/i);
  expect(linkElement).toBeInTheDocument();
});
