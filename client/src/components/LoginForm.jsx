import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return(
    <div>
      <h2>Login Form</h2>
      <form onSubmit={props.onSubmit}>
      <label htmlFor="email">
        Email:
      </label>
      <input
        type="text"
        onChange={props.handleChange}
        id="email"
        name="email"
        value={props.email} />
      <label htmlFor="password">
        Password:
      </label>
      <input
        type="text"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />
    </form>
    <button
      className='create'
      onClick={props.handleSubmit}
      type="submit">
      {props.buttonText}
    </button>
      <Link to="/register">New User</Link>
    </div>
  )
};

export default LoginForm;
