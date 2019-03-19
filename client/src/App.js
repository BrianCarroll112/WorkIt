import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import { registerUser,
         loginUser,
         getJobs,
         getUser,
         getCompany } from './services/apiHelpers'

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
      registerFormData: {
        email: '',
        password: '',
        first_name: '',
        last_name:'',
      },
      loginData: {
      email: '',
      password: ''
      },
      jobsArray: [],
      companiesArray: [],
      currentJob: 0,
      currentCompany: 0,
      token: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getJobs = this.getJobs.bind(this);
    this.showJob = this.showJob.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      },
      loginData: {
        ...prevState.loginData,
        [name]: value
      }
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    const data = await registerUser(this.state.registerFormData)
    this.setState({
      registerFormData: {
        email: '',
        password: '',
        first_name: '',
        last_name:''
      },
      token: data.token
    })
    console.log(this.state.registerToken)
    this.props.history.push('/profile');
  };

  async handleLogin(e) {
    e.preventDefault();
    const data = await loginUser(this.state.loginData)
    data === undefined ? alert('Invalid Email or Password- try again') :
      this.setState(prevState => ({
      loginData: {
        email: '',
        password: '',
      },
      token: data.token
    }))
    this.props.history.push('/profile');
  }

  async getJobs() {
    const jobsArray = await getJobs(this.token);
    this.setState({
      jobsArray
    });
  }

  showJob(e) {
    this.setState({
      currentJob: e.target.key
    })
  }

  // async showCompany(e) {
  //   const company = await getCompany()
  //   const currentCompany =
  //   this.setState({
  //     currentCompany
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Work it works</h1>

        <Route exact path="/" render={(props) => (
          <LoginForm
          {...props}
          buttonText="Sign In"
          handleChange={this.handleChange}
          email={this.state.loginData.email}
          password={this.state.loginData.password}
          handleSubmit={this.handleLogin}
          />
        )}/>

        <Route exact path="/register" render={(props) => (
          <RegisterForm
          {...props}
          buttonText="Sign Up"
          handleChange={this.handleChange}
          email={this.state.registerFormData.email}
          password={this.state.registerFormData.password}
          first_name={this.state.registerFormData.first_name}
          last_name={this.state.registerFormData.last_name}
          handleSubmit={this.handleRegister}
          />
        )}/>

        <Route exact path="/jobs" render={(props) => (
          <div>
          <JobSearchForm />
          <JobsList getJobs={this.getJobs} jobsArray={this.state.jobsArray} showJob={this.showJob}/>
          <JobPage currentJob={this.state.currentJob} />
          <Company currentCompany={this.state.currentCompany}/>
          </div>
        )}/>

        <Route exact path='/profile' render={(props) => (
          <UserProfile />
        )} />

      </div>
    );
  }
}

export default withRouter(App);
