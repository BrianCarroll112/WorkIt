import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getUser } from '../services/apiHelpers'
import Nav from './Nav';

class ApplicationProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: [],
    }
    this.handleSendApp = this.handleSendApp.bind(this);
  }

  async componentDidMount(){
    const id = await localStorage.getItem('id');
    const token = await localStorage.getItem('token');
    const user = await getUser(id, token)
    this.setState({
      user
    })
  }

  handleSendApp(e){
    e.preventDefault()
    this.props.history.push('/sent')
  }

  render(){
    return(
    <div>
      <Nav/>
    <div className="app-profile-container">
      <div className="app-profile-inner-container">
        <div className="app-profile-bio"><h4>Bio</h4>{this.state.user.bio}</div>
        <textarea className="app-profile-textarea" style={{resize: 'none', overflow:'scroll', height:'100px', width:'50%', fontSize:'1.0em'}} placeholder="Add A Cover Letter!"></textarea>
        <div className="app-profile-button-container">
          <button className="app-profile-button"
            onClick={() => this.props.history.push('/jobs')}>Cancel</button>
          <button className="app-profile-button"
            onClick={this.handleSendApp}>Send</button>
        </div>
      </div>
      <embed src={this.state.user.cv}/>
    </div>
  </div>

   )
 }
}

export default withRouter(ApplicationProfile);
