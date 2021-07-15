import { FC } from 'react';
import { Button } from 'antd';
import PropTypes, { InferProps } from 'prop-types';

const LoginButtonPropTypes = {
  isLoggedIn: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}

interface LoginButtonProp {
  /**
  Sets button functionality based on the current user's logged in status.
  */
  isLoggedIn?: boolean,
  /**
  Gets called when user wants to log in
  */
  onLogin?: () => void,
  /**
  Gets called when user wants to log out
  */
  onLogout?: () => void,
}

export type LoginButtonProps = InferProps<typeof LoginButtonPropTypes> & LoginButtonProp;

export const LoginButton: FC<LoginButtonProps> = ({
  isLoggedIn = false,
  onLogin,
  onLogout
  }) => {
    return isLoggedIn?<Button type="primary" onClick={onLogout}>Log Out</Button>:<Button onClick={onLogin}>Log In</Button>
}