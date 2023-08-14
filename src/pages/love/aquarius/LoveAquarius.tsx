import React from 'react';
import '../Love.css';
import ZodiacBtn from '../../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../../components/go-back/GoBackBtn';

const LoveAquarius = () => {
  return (
    <div className="love-container">
      <h1 className="love-title">Aquarius Love Compatibility</h1>
      <div className="love-description">
        Aquarius, the innovative and independent soul, approaches love with an
        open and unconventional mindset. They seek partners who embrace their
        uniqueness and share their intellectual pursuits, fostering a deep and
        meaningful connection.
      </div>
      <div className="love-sub-title">Choose your Partner's Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/lovecompatibility/aquarius/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/lovecompatibility/aquarius/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/lovecompatibility/aquarius/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/lovecompatibility/aquarius/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/lovecompatibility/aquarius/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/lovecompatibility/aquarius/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/lovecompatibility/aquarius/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/lovecompatibility/aquarius/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/lovecompatibility/aquarius/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/lovecompatibility/aquarius/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/lovecompatibility/aquarius/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/lovecompatibility/aquarius/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default LoveAquarius;
