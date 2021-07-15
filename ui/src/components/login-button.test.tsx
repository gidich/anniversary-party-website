import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './login-button.stories'; // import all stories from the stories file

const { LoggedIn, LoggedOut } = composeStories(stories);

test('Ensure that when logged in and button is clicked it calls the provided oonLogout callback', () => {
  const onLogout = jest.fn()
  render(<LoggedIn onLogout={onLogout} />);
  const buttonElement = screen.getByText('Log Out');
  userEvent.click(buttonElement);
  expect(buttonElement).not.toBeNull();
  expect(onLogout).toBeCalled();
});

test('Ensure that when logged out  is clicked it calls the provided onLogout callback', () => {
  const onLogin = jest.fn()
  render(<LoggedOut onLogin={onLogin} />);
  const buttonElement = screen.getByText('Log In');
  userEvent.click(buttonElement);
  expect(buttonElement).not.toBeNull();
  expect(onLogin).toBeCalled();
});