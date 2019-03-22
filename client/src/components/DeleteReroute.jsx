import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';

const DeleteReroute = (props) => {
  return(
    <div className="app-sent-container">
    <div>Are you sure you want to delete?</div>
    <button
    className ="app-profile-button"
    onClick={props.deleteUser}
    >Delete</button>
    </div>
  )
}

export default withRouter(DeleteReroute);
