import React from 'react';
import './Daily.css';
import GoBackBtn from '../../components/go-back/GoBackBtn';
import CurrentDate from '../../utils/date/CurrentDate';

const DailyAries = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Aries Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Aries, you might find that your enthusiasm is running high, and
        you're ready to take on the world. This is a great time to tackle tasks
        that require energy and initiative. Your natural leadership abilities
        will shine, and others may look to you for guidance. However, make sure
        to strike a balance between your enthusiasm and the practicality of your
        actions. Remember to consider the long-term consequences before diving
        headfirst into new endeavors.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, open communication is key. Be honest and
        transparent with your partner, and listen to their thoughts and feelings
        as well. Single Aries might find themselves drawn to someone who shares
        their passions and energy.
      </div>
      <div className="daily-reading">
        Career: You might find yourself stepping up to the plate and taking
        charge in the workplace. Your assertiveness and confidence could lead to
        new opportunities or the recognition of your efforts.
      </div>
      <div className="daily-reading">
        Health: Your physical energy is high today, so consider engaging in some
        form of exercise or outdoor activity. This will not only help you stay
        fit but also clear your mind and boost your mood.
      </div>
      <div className="daily-reading">
        Remember, Aries, your horoscope is just a fun glimpse into the cosmic
        energies of the day. Make the most of it by staying positive and
        embracing the opportunities that come your way.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyAries;
