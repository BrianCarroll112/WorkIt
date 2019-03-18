import React from 'react';
import ProfilePicture from './ProfilePicture';
import JobTitle from './JobTitle';
import Available from './Available';
import Bio from './Bio';
import Cv from './Cv';

const UserProfile = (props) => {
  return(
    <div>
      <h2>FirstName LastName</h2>
      <ProfilePicture />
      <JobTitle />
      <Available />
      <Bio />
      <Cv />
    </div>
  )
};

export default UserProfile;
