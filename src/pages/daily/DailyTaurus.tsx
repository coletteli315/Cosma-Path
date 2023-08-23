import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyTaurus = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Taurus Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Taurus, you might find yourself seeking stability and comfort.
        Your practical nature is in full swing, and you're likely to focus on
        tasks that require patience and attention to detail. This is a good time
        to tackle any ongoing projects or responsibilities that you've been
        putting off. While you're naturally reliable, make sure to also take
        some time for yourself and engage in activities that bring you joy.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, your loyalty and commitment shine
        through. If you're in a relationship, make an effort to spend quality
        time with your partner and show them your affection. Single Taurus
        individuals might feel drawn to someone who shares their values and
        interests.
      </div>
      <div className="daily-reading">
        Career: Your methodical approach to work is highly valued, and you might
        be asked to assist in resolving a complex issue or offer your expertise
        to a challenging project.
      </div>
      <div className="daily-reading">
        Health: Pay attention to your physical well-being today. Engage in
        activities that help you relax and unwind, such as a leisurely walk or
        some gentle stretching.
      </div>
      <div className="daily-reading">
        Remember, Taurus, your horoscope is meant to provide a fun and
        light-hearted insight into the energies of the day. Embrace your
        practical side while also allowing yourself to enjoy life's pleasures.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyTaurus;
