import React from 'react';
import '../Love.css';
import ZodiacBtn from '../../../components/zodiac/ZodiacBtn';
import GoBackBtn from '../../../components/go-back/GoBackBtn';

const LoveScorpio = () => {
  return (
    <div className="love-container">
      <h1 className="love-title">Scorpio Love Compatibility</h1>
      <div className="love-description">
        Scorpio, a passionate and intense sign, experiences love deeply. Known
        for their mystery and loyalty, Scorpios seek profound connections and
        are willing to explore the depths of emotions in their relationships.
      </div>
      <div className="love-sub-title">Choose your Partner's Sign</div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Aries"
          path="/lovecompatibility/scorpio/aries"
          className="zodiac-aries-btn"
        />
        <ZodiacBtn
          label="Taurus"
          path="/lovecompatibility/scorpio/taurus"
          className="zodiac-taurus-btn"
        />
        <ZodiacBtn
          label="Gemini"
          path="/lovecompatibility/scorpio/gemini"
          className="zodiac-gemini-btn"
        />
        <ZodiacBtn
          label="Cancer"
          path="/lovecompatibility/scorpio/cancer"
          className="zodiac-cancer-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Leo"
          path="/lovecompatibility/scorpio/leo"
          className="zodiac-leo-btn"
        />
        <ZodiacBtn
          label="Virgo"
          path="/lovecompatibility/scorpio/virgo"
          className="zodiac-virgo-btn"
        />
        <ZodiacBtn
          label="Libra"
          path="/lovecompatibility/scorpio/libra"
          className="zodiac-libra-btn"
        />
        <ZodiacBtn
          label="Scorpio"
          path="/lovecompatibility/scorpio/scorpio"
          className="zodiac-scorpio-btn"
        />
      </div>
      <div className="zodiac-btn-container">
        <ZodiacBtn
          label="Sagittarius"
          path="/lovecompatibility/scorpio/sagittarius"
          className="zodiac-sagittarius-btn"
        />
        <ZodiacBtn
          label="Capricorn"
          path="/lovecompatibility/scorpio/capricorn"
          className="zodiac-capricorn-btn"
        />
        <ZodiacBtn
          label="Aquarius"
          path="/lovecompatibility/scorpio/aquarius"
          className="zodiac-aquarius-btn"
        />
        <ZodiacBtn
          label="Pisces"
          path="/lovecompatibility/scorpio/pisces"
          className="zodiac-pisces-btn"
        />
      </div>
      <GoBackBtn />
    </div>
  );
};

export default LoveScorpio;
