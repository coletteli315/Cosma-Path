import React from 'react';
import './CurrentDate.css';

const CurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <h4 className="current-date">{formattedDate}</h4>;
};

export default CurrentDate;
