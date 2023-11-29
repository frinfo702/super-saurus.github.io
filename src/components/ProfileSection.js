import React from 'react';
import '../App.css';

function ProfileSection({ title, content, sectionId }) {
  return (
    <div className="my-4" id={sectionId} >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}



export default ProfileSection;
