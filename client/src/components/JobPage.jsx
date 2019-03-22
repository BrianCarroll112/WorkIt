import React from 'react';

const JobPage = (props) => {
  const { name } = props.currentCompany;
  const { description, employee_status, experience_level, job_title, location, salary } = props.currentJob;
  return(
    <div>
      {props.showJob === true ?
      <div>
      <div className="job-header">
      <h2>{job_title}</h2>
      <h3>{name} - {location}</h3>
      </div>

      <div className="blurb">
      <div>{employee_status}</div>
      <div>Salary: {salary}</div>
      <div>Experience: {experience_level}</div>
      </div>

      <div className="job-description">{description}</div>

      <div className="alljob-buttons">
      <button
      className="job-buttons"
      onClick={props.show}
      >Show more about {name}
      </button>
      <button
      className="job-buttons"
      onClick={props.apply}>
      Apply
      </button>
      </div>

      </div> : null}
    </div>
  )
};

export default JobPage;
