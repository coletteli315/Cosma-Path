import React from 'react';
import './GoBackBtn.css';

const GoBackBtn = () => {
  const handleGoBack = () => {
    window.history.go(-1); // Go back one page in the browser history
  };

  return (
    <button className="go-back-btn" onClick={handleGoBack}>
      <span className="go-back-btn-text">Go Back</span>
    </button>
  );
};

export default GoBackBtn;
