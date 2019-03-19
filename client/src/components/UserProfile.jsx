import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import JobTitle from './JobTitle';
import Available from './Available';
import Bio from './Bio';
import Cv from './Cv';

class UserProfile extends Component {
  constructor() {
    super()

    this.state = {
      isEditing: false,
      job_title: '',
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
  }

  handleToggleEdit(e) {
    e.preventDefault();
    this.setState({
      isEditing: true
    })
  };

  handleProfileChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      job_title: {
        ...prevState.job_title,
        [name]: value
      }
    }));
  }

  submitProfile(e) {
    e.preventDefault();
    this.setState({
      isEditing: false,
    })
  }

  render() {
    return (
    <div>
      <h2>FirstName LastName</h2>
      <ProfilePicture />
      <JobTitle
      buttonText="Edit"
      handleToggleEdit={this.handleToggleEdit}
      submitProfile={this.submitProfile}
      isEditing={this.state.isEditing}
      job_title={this.state.job_title}
      onChange={this.handleProfileChange}/>
      <Available />
      <Bio />
      <Cv />
    </div>
    );
  }
}

export default UserProfile;
