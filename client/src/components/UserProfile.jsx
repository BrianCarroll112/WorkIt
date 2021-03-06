import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { editUser,
        getUser } from '../services/apiHelpers'
import ProfilePicture from './ProfilePicture';
import JobTitle from './JobTitle';
import Available from './Available';
import Bio from './Bio';
import Cv from './Cv';

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: [],
      isEditingJobTitle: false,
      isEditingBio: false,
      job_title: '',
      bio:'',
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
    this.submitBio = this.submitBio.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleToggleBioEdit = this.handleToggleBioEdit.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const token = await localStorage.getItem('token');
    const user = await getUser(id, token)
    this.setState({
      user
    })
  }

  handleToggleEdit(e) {
    e.preventDefault();
    this.setState({
      isEditingJobTitle: true,
    })
  };

  handleToggleBioEdit(e) {
    e.preventDefault();
    this.setState({
      isEditingBio: true,
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
    const id = this.props.match.params.id;
    const token = await localStorage.getItem('token');
    const data = this.state.job_title;
    await editUser(id, data, token);
    const user = await getUser(id, token)
    this.setState({
      isEditingJobTitle: false,
      user
    })
  }

  async submitBio(e) {
    e.preventDefault();
    const id = this.props.match.params.id
    const token = await localStorage.getItem('token');
    const data = this.state.bio
    await editUser(id, data, token);
    const user = await getUser(id, token)
    this.setState({
      isEditingBio: false,
      user
    })
  }

  async handleConfirmDelete(e){
    e.preventDefault()
    const id = await localStorage.getItem('id');
    this.props.history.push(`/delete/${id}`)
  }

  render() {
    return (
    <div>
    <button className="deleteUser" onClick={this.handleConfirmDelete}> delete account </button>
    <div className="userHeader">
      <ProfilePicture {...this.props}
      profile_pic={this.state.user.profile_pic}/>
      <h2 className="userName">{this.state.user.first_name} {this.state.user.last_name}</h2>
      </div>
        <JobTitle
          buttonText="Edit"
          handleToggleEdit={this.handleToggleEdit}
          submitProfile={this.submitProfile}
          isEditing={this.state.isEditingJobTitle}
          job_title={this.state.user.job_title}
          onChange={this.handleProfileChange}/>
        <Bio
          isEditing={this.state.isEditingBio}
          handleToggleEdit={this.handleToggleBioEdit}
          onChange={this.handleBioChange}
          submitProfile={this.submitBio}
          bio={this.state.user.bio}/>
        <Cv {...this.props}
            cv={this.state.user.cv}/>

    </div>
    );
  }
}

export default withRouter(UserProfile);
