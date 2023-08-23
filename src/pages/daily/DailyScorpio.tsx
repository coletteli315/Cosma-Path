import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyScorpio = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Scorpio Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Scorpio, your intuitive and determined nature comes to the
        forefront. You might find yourself delving deep into matters that pique
        your interest, seeking hidden truths and insights. This is a great time
        for research, problem-solving, and introspection. However, be mindful
        not to become too fixated on negative thoughts or suspicions. Trust your
        instincts while also maintaining a balanced perspective.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, trust and vulnerability are key. Open
        communication with your partner can deepen your emotional connection.
        Single Scorpios might find themselves drawn to someone who shares their
        intensity and depth.
      </div>
      <div className="daily-reading">
        Career: Your determination and focus can lead to significant progress in
        your work projects. Consider tackling complex tasks that require your
        analytical skills.
      </div>
      <div className="daily-reading">
        Health: Channel your energy into physical activities that help you
        release tension and stress. Whether it's a workout or a relaxing walk,
        moving your body will boost your mood.
      </div>
      <div className="daily-reading">
        Remember, Scorpio, your horoscope provides a glimpse into the day's
        energies. Embrace your intuition and passion while also practicing
        self-care and maintaining a healthy perspective.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyScorpio;
