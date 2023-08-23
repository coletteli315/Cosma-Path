import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailySagittarius = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Sagittarius Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Sagittarius, your adventurous and optimistic nature takes center
        stage. You're likely to seek new experiences and opportunities that
        expand your horizons. This is a great time for learning, travel, and
        exploring different perspectives. Embrace spontaneity and stay open to
        unexpected changes, as they might lead to exciting outcomes.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, your cheerful and open-minded attitude
        can enhance your relationships. Share your aspirations with your
        partner, and be receptive to their ideas as well. Single Sagittarians
        might find themselves drawn to someone who shares their enthusiasm for
        life.
      </div>
      <div className="daily-reading">
        Career: Your enthusiasm and willingness to take risks can lead to
        creative breakthroughs at work. Embrace challenges and trust in your
        ability to adapt to new situations.
      </div>
      <div className="daily-reading">
        Health: Engage in physical activities that bring you joy, whether it's a
        sports activity, dancing, or spending time outdoors. Staying active will
        not only boost your energy but also enhance your overall well-being.
      </div>
      <div className="daily-reading">
        Remember, Sagittarius, your horoscope offers a playful insight into the
        day's energies. Embrace your adventurous spirit while also taking time
        to rest and recharge when needed.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailySagittarius;
