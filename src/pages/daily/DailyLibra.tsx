import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyLibra = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Libra Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Libra, your diplomatic and harmonious nature takes center stage.
        You're likely to seek balance and cooperation in your interactions with
        others. This is a great time to resolve conflicts and build bridges,
        whether it's in your personal relationships or professional
        collaborations. Remember to also consider your own needs and preferences
        while ensuring that the needs of others are met.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, focus on fostering understanding and
        compromise with your partner. Single Libras might find themselves drawn
        to someone who shares their values and promotes a sense of harmony.
      </div>
      <div className="daily-reading">
        Career: Your ability to navigate social dynamics can benefit you in the
        workplace. Your cooperative attitude and willingness to listen can lead
        to productive teamwork.
      </div>
      <div className="daily-reading">
        Health: Embrace activities that promote relaxation and inner peace, such
        as meditation, yoga, or spending time in nature. Maintaining emotional
        well-being is crucial for overall health.
      </div>
      <div className="daily-reading">
        Remember, Libra, your horoscope offers a playful insight into the day's
        energies. Embrace your diplomatic skills and strive to create harmony in
        your interactions while also valuing your own needs.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyLibra;
