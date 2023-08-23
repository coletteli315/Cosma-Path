import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyPisces = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Pisces Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Pisces, your compassionate and imaginative nature takes center
        stage. You're likely to be in tune with your emotions and the feelings
        of those around you. This is a great time to engage in creative
        pursuits, express your artistic side, or offer support to friends and
        loved ones who might need your empathetic listening ear.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, your sensitivity and understanding can
        deepen your relationships. Spend quality time with your partner,
        engaging in heartfelt conversations. Single Pisceans might find
        themselves drawn to someone who appreciates their emotional depth.
      </div>
      <div className="daily-reading">
        Career: Your intuitive insights can lead to valuable contributions at
        work. Trust your instincts and consider how your imaginative ideas can
        benefit your projects.
      </div>
      <div className="daily-reading">
        Health: Prioritize activities that promote relaxation and emotional
        well-being. Meditation, journaling, or spending time near water can have
        a calming effect on your mind and body.
      </div>
      <div className="daily-reading">
        Remember, Pisces, your horoscope provides a gentle insight into the
        day's energies. Embrace your compassionate nature while also taking time
        to nourish your own emotions and creativity.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyPisces;
