import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UserInput } from './userInput';

Enzyme.configure({ adapter: new Adapter() });

test('renders userInput', () => {
  const { getByText } = render(<UserInput onSubmit={(userInput) => {}} />);
  const linkElement = getByText(/userinput/i);
  expect(linkElement).toBeInTheDocument();
});

it('successfully finds zipcode', () => {
  const zip = '67550';
  const wrapper = mount<UserInput>(<UserInput onSubmit={(input) => {}} />);
  expect(wrapper.instance().isZipCode(zip)).toBe(true);
});

it('fails to find zipcode in street address', () => {
  const zip = '123 Main St';
  const wrapper = mount<UserInput>(<UserInput onSubmit={(input) => {}} />);
  expect(wrapper.instance().isZipCode(zip)).toBe(false);
});

it('fails to find zipcode in full address', () => {
  const zip = '123 Main St Wichita, KS 67203';
  const wrapper = mount<UserInput>(<UserInput onSubmit={(input) => {}} />);
  expect(wrapper.instance().isZipCode(zip)).toBe(false);
});
