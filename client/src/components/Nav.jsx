import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav>
    <Link to ="/jobs">Job List</Link>
    <Link to ={`/user/${localStorage.getItem('id')}`}>Profile</Link>
  </nav>
)
