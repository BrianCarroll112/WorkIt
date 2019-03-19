import React from 'react';

const Bio = (props) => {
  return (
    <div>
      {props.isEditing !== false ?
      <div></div> :

      <div>
        {props.bio === '' ?
        <div>Enter Bio</div> :
        <div>{props.bio.bio}</div>}
        <button
        onClick={props.handleToggleEdit}>
        {props.buttonText}
        </button>
      </div>}
    </div>
  )
}

export default Bio;
