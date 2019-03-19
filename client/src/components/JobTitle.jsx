import React from 'react';

const JobTitle = (props) => {
  return(
    <div>
    {props.isEditing !== false ?
      <div>
        <form onSubmit={props.onSubmit}>
          <select
          onChange={props.onChange}
          id="job_title"
          name="job_title"
          value={props.optionsState}>
            <option name="job_title">Choose One</option>
            <option name="job_title" value="Software Engineer">Software Engineer</option>
            <option name="job_title" value="Web Developer">Web Developer</option>
          </select>
        </form>
        <button
        onClick={props.submitProfile}>
        Submit
        </button>
      </div> :
      <div>
        {props.job_title === '' ?
          <div>Add Job Title</div> :
          <div>{props.job_title.job_title}</div>}
        <button
        onClick={props.handleToggleEdit}>
        {props.buttonText}
        </button>
      </div>
    }
    </div>
  )
};

export default JobTitle;
