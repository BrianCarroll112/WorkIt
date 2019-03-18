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

  }


  render() {
    return (
      <div className="App">
        <h1>Work it works</h1>

        <Route exact path="/" render={(props) => (
          <LoginForm />
        )}/>

        <Route exact path="/register" render={(props) => (
          <RegisterForm />
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
