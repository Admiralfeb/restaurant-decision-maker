import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders userInput', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/userinput/i);
  expect(linkElement).toBeInTheDocument();
});
