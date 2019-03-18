import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return(
    <div>
      <h2>Login Form</h2>
      <Link to="/register">New User</Link>
    </div>
  )
};

export default LoginForm;
