import React from 'react';

const Bio = (props) => {
  return (
    <div className="bio">
      {props.isEditing !== false ?
      <div>
      <form onSubmit={props.onSubmit}>

        <textarea className="bioArea"
        name='bio'
        placeholder='tell a bit about yourself...'
        onChange={props.onChange} />

      </form>
      <button className="submitBio"
      onClick={props.submitProfile}>
      Save
      </button>

      </div> :

      <div>
        {props.bio === 'Add a bio'?
        <div className="existBio">Add a short bio </div> :
        <div className="existBio">{props.bio}</div>}

        <button className="editBio"
        onClick={props.handleToggleEdit}>
        {props.buttonText}
        Edit
        </button>

      </div>}

    </div>
  )
}

export default Bio;
