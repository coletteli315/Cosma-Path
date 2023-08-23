import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyLeo = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Leo Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Leo, your confident and charismatic energy shines brightly.
        You're likely to be in the spotlight, and your natural leadership
        qualities are emphasized. This is a great time to take charge of
        projects or initiatives that require your enthusiasm and determination.
        However, make sure to also listen to others and consider their input, as
        collaboration can lead to even greater success.
      </div>
      <div className="daily-reading">
        Love: Your charm and magnetic personality are irresistible in matters of
        the heart. If you're in a relationship, show appreciation for your
        partner and create special moments together. Single Leos might find
        themselves drawing admirers who are captivated by your presence.
      </div>
      <div className="daily-reading">
        Career: Your self-assured approach can lead to breakthroughs at work.
        Express your ideas confidently and take calculated risks to achieve your
        goals.
      </div>
      <div className="daily-reading">
        Health: Engage in physical activities that invigorate your body and
        mind. Whether it's a workout, dance class, or outdoor adventure, staying
        active will boost your energy and mood.
      </div>
      <div className="daily-reading">
        Remember, Leo, your horoscope provides a glimpse into the day's
        energies. Embrace your confidence and use your charisma to inspire those
        around you while also valuing teamwork and collaboration.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyLeo;
