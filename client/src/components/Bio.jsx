import React from 'react';

const Bio = (props) => {
  return (
    <div>
      {props.isEditing !== false ?
      <div>
      <form onSubmit={props.onSubmit}>

        <textarea
        name='bio'
        onChange={props.onChange} />


      </form>
      <button
      onClick={props.submitProfile}>
      Submit
      </button>

      </div> :

      <div>
        {props.bio === ''?
        <div>Add Bio</div> :
        <div>{props.bio.bio}</div>}
        <button
        onClick={props.handleToggleEdit}>
        {props.buttonText}
        Edit
        </button>
      </div>}
    </div>
  )
}

export default Bio;
