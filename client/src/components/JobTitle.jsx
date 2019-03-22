import React from 'react';

const JobTitle = (props) => {
  return(
    <div>
    {props.isEditing !== false ?
      <div>
      <div class="menumnue">
        <form onSubmit={props.onSubmit}>
          <select className="jobMenu"
          onChange={props.onChange}
          id="job_title"
          name="job_title"
          value={props.optionsState}>
            <option name="job_title">Choose One</option>
            <option name="job_title" value="Software Engineer">Software Engineer</option>
            <option name="job_title" value="Web Developer">Web Developer</option>
          </select>
        </form>
        <button className="submitJob"
        onClick={props.submitProfile}>
        Save
        </button>
      </div>
      </div> :
      <div className="jobTitle1">
        {props.job_title === 'Add a job' || props.job_title === 'Choose One'?
          <div className="jobTitle">Add Your Profession</div> :
          <div>{props.job_title}</div>}
        <button className="editTitle"
        onClick={props.handleToggleEdit}>
        {props.buttonText}
        </button>
      </div>
    }
    </div>
  )
};

export default JobTitle;
