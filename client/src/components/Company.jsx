import React from 'react';

const Company = (props) => {
  const {name, link, location, about} = props.currentCompany;
  return (
    <div>
      <h2><a target='_blank' rel="noopener noreferrer" href={link}>{name}</a></h2>
      <h3>{location}</h3>
      <p>{about}</p>
    </div>

  )
}

export default Company;
