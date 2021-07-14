import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';
import { LoginButton }  from './login-button';
import '../App.css';

export default {
  title: 'Example/LoginButton',
  component: LoginButton,
  argTypes: {
    isLoggedIn : { control: 'boolean'},
    onLogin: {action: 'Login Clicked'},
    onLogout: {action: 'Logout Clicked'},
  },
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggedIn: false
};