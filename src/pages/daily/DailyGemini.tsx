import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyGemini = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Gemini Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Gemini, your curious and adaptable nature takes center stage. You
        might find yourself drawn to new experiences, ideas, and conversations
        that stimulate your mind. This is a great time to engage in learning or
        networking opportunities. However, be mindful not to spread yourself too
        thin by taking on too many tasks at once. Focus on what truly resonates
        with you and prioritize your interests.
      </div>
      <div className="daily-reading">
        Love: Communication is key in your relationships today. Express your
        thoughts and feelings openly, and encourage your partner to do the same.
        Single Geminis might find themselves drawn to someone who stimulates
        their intellect and shares their zest for life.
      </div>
      <div className="daily-reading">
        Career: Your versatility is an asset in the workplace, and you might be
        called upon to adapt to changing circumstances or take on unexpected
        tasks. Embrace these challenges as opportunities for growth.
      </div>
      <div className="daily-reading">
        Health: Keep your mind engaged by trying out a new hobby, reading a
        thought-provoking book, or engaging in a stimulating conversation.
        Mental activity can contribute to your overall well-being.
      </div>
      <div className="daily-reading">
        Remember, Gemini, your horoscope offers a playful glimpse into the day's
        energies. Embrace your curiosity and enjoy the variety that life has to
        offer.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyGemini;
