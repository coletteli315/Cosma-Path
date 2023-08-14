import React from 'react';
import './Footer.css';
import CosmaPathBtn from '../../components/cosma-path/CosmaPathBtn';

const Footer = () => {
  return (
    <footer className="footer">
      <CosmaPathBtn />
      <div className="copyright">© 2023 Cosma Path. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
