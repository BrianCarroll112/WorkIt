import React from 'react';

const RegisterForm = (props) => {
  return(
    <div className="reg-page">
      <h1 className="register-top">Work</h1>

      <div className="reg-whole">
       <form className="register-form" onSubmit={props.onSubmit}>
        <div className="register">
        <label>Email</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="email"
        value={props.email} />
        </div>

        <div className="register">
        <label>Password</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />
        </div>

        <div className="register">
        <label>First Name</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="first_name"
        name="first_name"
        value={props.first_name} />
        </div>

        <div className="register">
        <label>Last Name</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="last_name"
        name="last_name"
        value={props.last_name} />
        </div>
        <button
        className='button-reg'
        onClick={props.handleSubmit}
        type="submit">
        {props.buttonText}
        </button>
       </form>
       <div className='hey'>
        <div className='letter'>H</div>
        <div className='letter'>E</div>
        <div className='letter'>Y.</div>
      </div>
      </div>

    </div>
  )
};

export default RegisterForm;
