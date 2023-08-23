import React from 'react';
import './Daily.css';
import GoBackBtn from '../../components/go-back/GoBackBtn';
import CurrentDate from '../../utils/date/CurrentDate';

const DailyAquarius = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Aquarius Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Aquarius, your innovative and independent nature shines through.
        You're likely to seek out unique solutions and unconventional approaches
        to challenges. This is a great time to engage in creative projects or
        brainstorm new ideas. Embrace your individuality and don't be afraid to
        share your perspectives with others, even if they differ from the norm.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, your open-mindedness and friendly
        demeanor can enhance your relationships. Spend quality time with your
        partner, engaging in meaningful conversations. Single Aquarians might
        find themselves attracted to someone who appreciates their unique
        qualities.
      </div>
      <div className="daily-reading">
        Career: Your ability to think outside the box can lead to breakthroughs
        in your work. Consider collaborating with others who share your
        innovative mindset.
      </div>
      <div className="daily-reading">
        Health: Engage in activities that stimulate your mind and body. Whether
        it's trying out a new hobby, attending a workshop, or going for a walk
        in a new environment, embracing novelty can invigorate you.
      </div>
      <div className="daily-reading">
        Remember, Aquarius, your horoscope offers a playful glimpse into the
        day's energies. Embrace your individuality and use your creativity to
        inspire positive changes in your life and the lives of those around you.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyAquarius;
