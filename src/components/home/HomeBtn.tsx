import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeBtn.css';

interface HomeBtnProps {
  label: string;
  path: string;
  className: string;
}

const HomeBtn: React.FC<HomeBtnProps> = ({ label, path, className }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <button className={`home-btn ${className}`} onClick={handleNavigate}>
      {label}
    </button>
  );
};

export default HomeBtn;
