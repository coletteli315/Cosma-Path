import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyCancer = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Cancer Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Cancer, your emotional and intuitive nature is heightened. You
        might find yourself seeking comfort and security in familiar
        surroundings and with loved ones. This is a great time to connect with
        family and close friends, as their support can bring you a sense of
        peace. Trust your instincts when making decisions, and remember to take
        some time for self-care to recharge your emotional well-being.
      </div>
      <div className="daily-reading">
        Love: Emotional connections are highlighted in your relationships today.
        Spend quality time with your partner, sharing your thoughts and
        feelings. Single Cancers might find themselves attracted to someone who
        shares their values and offers a sense of emotional understanding.
      </div>
      <div className="daily-reading">
        Career: Your empathy and nurturing qualities are appreciated by your
        colleagues. You might find yourself assisting others or taking on a
        supportive role within the team.
      </div>
      <div className="daily-reading">
        Health: Pay attention to your emotional health today. Engage in
        activities that bring you joy, whether it's spending time in nature,
        practicing mindfulness, or enjoying creative pursuits.
      </div>
      <div className="daily-reading">
        Remember, Cancer, your horoscope offers a gentle insight into the
        energies of the day. Embrace your nurturing side and prioritize your
        emotional well-being while also staying open to new experiences.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyCancer;
