import React from 'react';

import '../styles/profile/profile.css';

const AddPlace = ({ onAddPlace }: { onAddPlace: () => void }) => {
  return (
    <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
  )
}

export default AddPlace;
