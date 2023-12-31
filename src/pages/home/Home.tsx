import React from 'react';
import './Home.css';
import HomeBtn from '../../components/home/HomeBtn';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Cosma Path</h1>
      <div className="home-description">
        Unlock the stars' wisdom and discover your cosmic journey with our
        comprehensive astrology app.
      </div>
      <div className="home-btn-container">
        <HomeBtn
          label="Find Your Sign"
          path="/findyoursign"
          className="find-your-sign-btn"
        />
        <HomeBtn
          label="Daily Horoscopes"
          path="/dailyhoroscopes"
          className="daily-horoscopes-btn"
        />
        <HomeBtn
          label="Love Compatibility"
          path="/lovecompatibility"
          className="love-compatibility-btn"
        />
      </div>
      <div className="soon">More features coming soon!</div>
    </div>
  );
};

export default Home;
