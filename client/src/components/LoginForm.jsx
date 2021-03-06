import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends Component {

  async componentDidMount() {
    const token = await localStorage.getItem('token');
    token && this.props.history.push('/jobs');
  }

  render() {
    return(
      <div className="login">
        <h1>Work</h1>
        <form onSubmit={this.props.onSubmit}>
          <input
          autoComplete="off"
          className="input-login"
          type="text"
          onChange={this.props.handleChange}
          id="email"
          name="email"
          value={this.props.email}
          placeholder="Email"/>
          <input
          autoComplete="off"
          className="input-login"
          type="password"
          onChange={this.props.handleChange}
          id="password"
          name="password"
          value={this.props.password}
          placeholder="Password"/>
          </form>

        <button
        className='button-login'
        onClick={this.props.handleSubmit}
        type="submit">
        {this.props.buttonText}
        </button>

        <Link className='new-user' to="/register">New User</Link>
      </div>
    )
  }
};

export default LoginForm;
