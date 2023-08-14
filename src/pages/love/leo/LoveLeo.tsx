import React from 'react';
import '../Love.css';
import ZodiacBtn from '../../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../../components/go-back/GoBackBtn';

const LoveLeo = () => {
  return (
    <div className="love-container">
      <h1 className="love-title">Leo Love Compatibility</h1>
      <div className="love-description">
        Leo, the passionate and charismatic partner, seeks grand and vibrant
        love stories. With a flair for drama and a generous heart, they shower
        their loved ones with affection and create a fiery and memorable
        romance.
      </div>
      <div className="love-sub-title">Choose your Partner's Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/lovecompatibility/leo/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/lovecompatibility/leo/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/lovecompatibility/leo/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/lovecompatibility/leo/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/lovecompatibility/leo/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/lovecompatibility/leo/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/lovecompatibility/leo/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/lovecompatibility/leo/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/lovecompatibility/leo/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/lovecompatibility/leo/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/lovecompatibility/leo/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/lovecompatibility/leo/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default LoveLeo;
