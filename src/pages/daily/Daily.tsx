import React from 'react';
import './Daily.css';
import ZodiacBtn from '../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const Daily = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Daily Horoscopes</h1>
      <div className="daily-description">
        Embark on a cosmic journey and unlock the wisdom of the stars with our
        illuminating daily horoscopes, guiding you through the celestial
        influences that shape your day.
      </div>
      <div className="daily-sub-title">Choose a Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/dailyhoroscopes/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/dailyhoroscopes/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/dailyhoroscopes/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/dailyhoroscopes/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/dailyhoroscopes/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/dailyhoroscopes/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/dailyhoroscopes/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/dailyhoroscopes/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/dailyhoroscopes/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/dailyhoroscopes/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/dailyhoroscopes/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/dailyhoroscopes/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default Daily;
