import React from 'react';
import '../Love.css';
import ZodiacBtn from '../../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../../components/go-back/GoBackBtn';

const LoveSagittarius = () => {
  return (
    <div className="love-container">
      <h1 className="love-title">Sagittarius Love Compatibility</h1>
      <div className="love-description">
        Sagittarius, an adventurous and free-spirited sign, approaches love with
        enthusiasm and curiosity. They value independence and seek partners who
        share their zest for life, often embarking on exciting journeys
        together.
      </div>
      <div className="love-sub-title">Choose your Partner's Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/lovecompatibility/sagittarius/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/lovecompatibility/sagittarius/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/lovecompatibility/sagittarius/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/lovecompatibility/sagittarius/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/lovecompatibility/sagittarius/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/lovecompatibility/sagittarius/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/lovecompatibility/sagittarius/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/lovecompatibility/sagittarius/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/lovecompatibility/sagittarius/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/lovecompatibility/sagittarius/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/lovecompatibility/sagittarius/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/lovecompatibility/sagittarius/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default LoveSagittarius;
