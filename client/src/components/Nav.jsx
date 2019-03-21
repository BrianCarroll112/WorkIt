import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav className='nav'>
    <h2 className='logo'>WORK</h2>
    <div className="links">
    <Link className="jobsLink" to ="/jobs">Job List</Link>
    <Link className="userLink" to ={`/user/${props.id}`}>Profile</Link>
    <button className="logout" onClick={props.onClick}>Logout</button>
    </div>
  </nav>
)
