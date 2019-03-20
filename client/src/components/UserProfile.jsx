import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfilPictureTwo from './ProfilPictureTwo';
import JobTitle from './JobTitle';
import Available from './Available';
import Bio from './Bio';
import Cv from './Cv';

const UserProfile = (props) => {
  return(
    <div>
      <h2>FirstName LastName</h2>
      <ProfilePicture />
      <ProfilPictureTwo />
      <JobTitle />
      <Available />
      <Bio />
      <Cv />
    </div>
  )
};

export default UserProfile;
