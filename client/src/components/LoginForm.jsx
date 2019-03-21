import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return(
    <div className="login">
      <h1>Work</h1>
      <form onSubmit={props.onSubmit}>
        <input
        autoComplete="off"
        className="input-login"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="email"
        value={props.email}
        placeholder="Email"/>
        <input
        autoComplete="off"
        className="input-login"
        type="text"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password}
        placeholder="Password"/>
        </form>

      <button
      className='button-login'
      onClick={props.handleSubmit}
      type="submit">
      {props.buttonText}
      </button>

      <Link className='new-user' to="/register">New User</Link>
    </div>
  )
};

export default LoginForm;
