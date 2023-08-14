import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ZodiacBtn.css';

interface ZodiacBtnProps {
  label: string;
  path: string;
  className: string;
}

const ZodiacBtn: React.FC<ZodiacBtnProps> = ({ label, path, className }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <button className={`zodiac-btn ${className}`} onClick={handleNavigate}>
      {label}
    </button>
  );
};

export default ZodiacBtn;
