import React from 'react';
import './Header.css';
import CosmaPathBtn from '../../components/cosma-path/CosmaPathBtn';

const Header = () => {
  return (
    <header className="header">
      <div className="header-start-space"></div>
      <CosmaPathBtn />
    </header>
  );
};

export default Header;
