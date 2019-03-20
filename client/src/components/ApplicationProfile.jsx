import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getUser } from '../services/apiHelpers'

class ApplicationProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: [],
    }
    this.handleSendApp = this.handleSendApp.bind(this);
  }

  async componentDidMount(){
    const id = this.props.match.params.id
    const token = this.props.token
    console.log(id)
    console.log(token)
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
    console.log(this.state.user)
    return(
    <div>
        <div>{this.state.user.first_name} {this.state.last_name}</div>
        <div>{this.state.user.profile_pic}</div>
        <div>{this.state.user.job_title}</div>
        <div>{this.state.user.bio}</div>
        <div>{this.state.user.cv}</div>
        <button
        onClick={this.handleSendApp}>Send Application</button>
    </div>
   )
 }
}

export default withRouter(ApplicationProfile);
