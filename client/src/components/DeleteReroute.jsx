import React from 'react';

const DeleteReroute = (props) => {
  return(
    <div>
    <div>Are you sure you want to delete?</div>
    <button
    onClick={props.deleteUser}
    >Delete</button>
    </div>
  )
}

export default DeleteReroute;
