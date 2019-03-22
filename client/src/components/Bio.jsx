import React from 'react';

const Bio = (props) => {
  return (
    <div className="bio">
      {props.isEditing !== false ?
      <div>
      <form onSubmit={props.onSubmit}>

        <textarea className="bioArea"
        name='bio'
        onChange={props.onChange} />


      </form>
      <button className="submitBio"
      onClick={props.submitProfile}>
      Save
      </button>

      </div> :
      <div class="totalBio">
        {props.bio === 'Add a bio'?
        <div>Tell a bit about yourself...</div> :
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
