import { FC } from 'react';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import PropTypes, { InferProps } from 'prop-types';
import './login-button.css';


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

    var properButton;
      if(isLoggedIn=== true){
        properButton = <Button type="primary" icon={<LogoutOutlined />} onClick={onLogout}>Log Out</Button>;
      }else{
        properButton =<Button type="primary" icon={<LoginOutlined />} onClick={onLogin}>Log In</Button>
      }
    

    return <>
      <div className='loginButton'>
        {properButton}
      </div>
    </>

     
}