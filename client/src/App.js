import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import JobsList from './components/JobsList';
import JobPage from './components/JobPage';
import JobSearchForm from './components/JobSearchForm';
import UserProfile from './components/UserProfile';
import Company from './components/Company';

class App extends Component {
  constructor() {
    super()

    this.state = {
      registerToken: '',
      registerFormData: {
        first_name: '',
        last_name:'',
        email: '',
        password: ''
      },
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

  }

  handleChange(e) {
  const { name, value } = e.target;
  this.setState(prevState => ({
    registerFormData: {
      ...prevState.formData,
      [name]: value
    },
   }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const data = await registerUser(this.state.registerFormData);
    this.setState(prevState => ({
      registerFormData: {
        first_name: '',
        last_name:'',
        email: '',
        password: ''
      },
      registerToken: data.token
    }))
  }


  render() {
    return (
      <div className="App">
        <h1>Work it works</h1>

        <Route exact path="/" render={(props) => (
          <LoginForm />
        )}/>

        <Route exact path="/register" render={(props) => (
          <RegisterForm
          {...props}
          buttonText="Sign Up"
          handleChange={this.handleChange}
          email={this.state.formData.email}
          password={this.state.formData.password}
          first_name={this.state.formData.first_name}
          last_name={this.state.formData.last_name}
          handleSubmit={this.handleRegister}
          />
        )}/>

        <Route exact path="/jobs" render={(props) => (
          <div>
          <JobSearchForm />
          <JobsList />
          <JobPage />
          <Company />
          </div>
        )}/>

        <Route exact path='/profile' render={(props) => (
          <UserProfile />
        )} />

      </div>
    );
  }
}

export default App;
