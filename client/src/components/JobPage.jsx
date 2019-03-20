import React from 'react';

const JobPage = (props) => {
  const { name } = props.currentCompany;
  const { description, employee_status, experience_level, job_title, location, salary } = props.currentJob;
  return(
    <div>
      {props.showJob === true ?
      <div>
      <h2>{job_title}</h2>
      <h3>{name} - {location}</h3>
      <p>FT/PT: {employee_status}</p>
      <p>Salary: {salary}</p>
      <p>Experience: {experience_level}</p>
      <p>{description}</p>
      <button
      onClick={props.show}
      >Show more about {name}
      </button>
      <button
      onClick={props.apply}>
      Apply
      </button>
      </div> : null}
    </div>
  )
};

export default JobPage;
