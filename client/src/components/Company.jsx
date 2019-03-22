import React from 'react';

const Company = (props) => {
  const {name, link, location, about} = props.currentCompany;
  return (
    <div>{props.showCompany === true ?
      <div>
      <div className="job-header">
      <h2><a target='_blank' rel="noopener noreferrer" href={link}>{name}</a></h2>
      <h3>{location}</h3>
      </div>

      <div className="job-description">{about}</div>

      <div className="alljob-buttons">
      <button
      className="job-buttons"
      onClick={props.show}
      >Back to {name} Job Posting</button>
      </div>
      </div> : null
    }
    </div>

  )
}

export default Company;
