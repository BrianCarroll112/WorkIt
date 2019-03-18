import React from 'react';

const RegisterForm = (props) => {
  return(
    <div>
      <div>Register Form</div>
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
        <label htmlFor="first_name">
          First Name:
        </label>
        <input
          type="text"
          onChange={props.handleChange}
          id="first_name"
          name="first_name"
          value={props.first_name} />
        <label htmlFor="last_name">
          Last Name:
        </label>
        <input
          type="text"
          onChange={props.handleChange}
          id="last_name"
          name="last_name"
          value={props.last_name} />
    </form>
    <button
      className='create'
      onClick={props.handleSubmit}
      type="submit">
      {props.buttonText}
    </button>
    </div>
  )
};

export default RegisterForm;
