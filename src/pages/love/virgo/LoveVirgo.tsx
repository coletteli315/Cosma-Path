import React from 'react';
import '../Love.css';
import ZodiacBtn from '../../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../../components/go-back/GoBackBtn';

const LoveVirgo = () => {
  return (
    <div className="love-container">
      <h1 className="love-title">Virgo Love Compatibility</h1>
      <div className="love-description">
        Virgo, the analytical and devoted lover, approaches love with
        practicality and attention to detail. Their nurturing nature and desire
        for stability create a harmonious and reliable relationship, built on
        trust and genuine care.
      </div>
      <div className="love-sub-title">Choose your Partner's Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/lovecompatibility/virgo/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/lovecompatibility/virgo/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/lovecompatibility/virgo/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/lovecompatibility/virgo/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/lovecompatibility/virgo/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/lovecompatibility/virgo/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/lovecompatibility/virgo/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/lovecompatibility/virgo/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/lovecompatibility/virgo/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/lovecompatibility/virgo/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/lovecompatibility/virgo/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/lovecompatibility/virgo/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default LoveVirgo;
