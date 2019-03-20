import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import { registerUser,
         loginUser,
         getJobs,
         getUser,
         getCompanies } from './services/apiHelpers'

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import JobsList from './components/JobsList';
import JobPage from './components/JobPage';
import JobSearchForm from './components/JobSearchForm';
import UserProfile from './components/UserProfile';
import Company from './components/Company';
import Nav from './components/Nav'

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
      renderedJobsArray: [],
      companiesArray: [],
      currentJob: {},
      currentCompany: {},
      token: null,
      id: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getJobs = this.getJobs.bind(this);
    this.showJob = this.showJob.bind(this);
    this.getCompanies = this.getCompanies.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setFirstView = this.setFirstView.bind(this);
    this.setRenderedArray = this.setRenderedArray.bind(this);

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
      token: data.token,
      id: data.id
    })
    this.props.history.push(`/user/${data.id}`);
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
      token: data.token,
      id: data.id
    }))
    this.props.history.push(`/jobs`);
  }

  async getJobs() {
    const jobsArray = await getJobs(this.state.token);
    this.setState({
      jobsArray,
      renderedJobsArray: jobsArray
    });
  }

  async getCompanies() {
    const companiesArray = await getCompanies(this.state.token);
    this.setState({
      companiesArray
    })
  }

  setCompany() {
    const { companyId } = this.state.currentJob;
    const currentCompany = this.state.companiesArray.find((company) => company.id == companyId);
    this.setState({
      currentCompany
    })
  }

  async showJob(e) {
    const currentJob = await this.state.jobsArray.find(job => job.id == e.currentTarget.id)
    await this.setState({
      currentJob
    })
    this.setCompany();
  }

  setFirstView() {
    if (this.state.renderedJobsArray.length > 0 ){
      this.setState({
        currentJob: this.state.renderedJobsArray[0],
        showJob:true,
        showCompany:false
      });
      this.setCompany();
    } else {
      this.setState({
        showJob: false,
        showCompany:false
      })
    }
  }

  setRenderedArray(array) {
    this.setState({
      renderedJobsArray: array
    })
  }

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
            <Nav userId={this.state.id} />
            <JobSearchForm
              jobsArray={this.state.jobsArray}
              renderedJobsArray={this.state.renderedJobsArray}
              setRenderedArray={this.setRenderedArray}
              getJobs={this.getJobs}
              setFirstView={this.setFirstView}/>
            <JobsList
              getJobs={this.getJobs}
              getCompanies={this.getCompanies}
              jobsArray={this.state.jobsArray}
              renderedJobsArray={this.state.renderedJobsArray}
              companiesArray={this.state.companiesArray}
              showJob={this.showJob}
              setFirstView={this.setFirstView}/>
            <JobPage
              currentJob={this.state.currentJob}
              currentCompany={this.state.currentCompany}/>
            <Company
              currentCompany={this.state.currentCompany}/>
          </div>
        )}/>

        <Route exact path='/user/:id' render={(props) => (
          <>
          <Nav id={this.state.id} />
          <UserProfile
          {...props}
          token={this.state.token}/>
          </>
        )} />

      </div>
    );
  }
}

export default withRouter(App);
