import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyCapricorn = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Capricorn Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Capricorn, your disciplined and practical nature is highlighted.
        You might find yourself focused on tasks that require careful planning
        and organization. This is a great time to tackle responsibilities and
        projects that contribute to your long-term goals. While your
        determination is admirable, remember to also take breaks and prioritize
        self-care to maintain a healthy balance.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, express your feelings and show your
        commitment to your partner. Communication is key to fostering trust and
        understanding. Single Capricorns might find themselves drawn to someone
        who shares their values and ambition.
      </div>
      <div className="daily-reading">
        Career: Your attention to detail and methodical approach can lead to
        successful outcomes in your work projects. Consider working on tasks
        that require your analytical skills.
      </div>
      <div className="daily-reading">
        Health: Prioritize your physical well-being by engaging in activities
        that promote relaxation and stress relief. Whether it's meditation, a
        warm bath, or deep breathing exercises, find what works for you.
      </div>
      <div className="daily-reading">
        Remember, Capricorn, your horoscope provides a glimpse into the day's
        energies. Embrace your practicality while also allowing yourself moments
        of rest and enjoyment.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyCapricorn;
