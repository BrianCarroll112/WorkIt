import React, { Component } from 'react';
import { editUser } from '../services/apiHelpers'
import ProfilePicture from './ProfilePicture';
import JobTitle from './JobTitle';
import Available from './Available';
import Bio from './Bio';
import Cv from './Cv';

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      job_title: '',
      bio:'',
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
    this.submitBio = this.submitBio.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
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

  handleBioChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      bio: {
        ...prevState.bio,
        [name]: value
      }
    }));
  }

  async submitProfile(e) {
    e.preventDefault();
    const id = this.props.match.params.id
    const token = this.props.token
    const data = this.state.job_title
    console.log(id)
    await editUser(id, data, token);
    this.setState({
      isEditing: false,
    })
  }

  async submitBio(e) {
    e.preventDefault();
    const id = this.props.match.params.id
    const token = this.props.token
    const data = this.state.bio
    console.log(id)
    await editUser(id, data, token);
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
      <Bio
      isEditing={this.state.isEditing}
      handleToggleEdit={this.handleToggleEdit}
      onChange={this.handleBioChange}
      submitProfile={this.submitBio}
      bio={this.state.bio}/>
      <Cv />
    </div>
    );
  }
}

export default UserProfile;
