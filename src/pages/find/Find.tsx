import React from 'react';
import './Find.css';
import GoBackBtn from '../../components/go-back/GoBackBtn';
import Birthdate from '../../utils/birthdate/Birthdate';

const Daily = () => {
  return (
    <div className="find-container">
      <h1 className="find-title">Find Out Your Zodiac Sign</h1>
      <div className="find-description">
        Discover your zodiac sign by entering your birthdate and uncover the
        cosmic insights aligned with your celestial identity.
      </div>
      <div className="find-sub-title">Please enter your birthdate</div>
      <Birthdate />
      <GoBackBtn />
    </div>
  );
};

export default Daily;
