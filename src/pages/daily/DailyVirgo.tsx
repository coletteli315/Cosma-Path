import React from 'react';
import './Daily.css';
import CurrentDate from '../../utils/date/CurrentDate';
import GoBackBtn from '../../components/go-back/GoBackBtn';

const DailyVirgo = () => {
  return (
    <div className="daily-container">
      <h1 className="daily-title">Virgo Daily Horoscope</h1>
      <CurrentDate />
      <div className="daily-reading">
        Today, Virgo, your practical and analytical nature is highlighted. You
        might find yourself focusing on tasks that require attention to detail
        and organization. This is a great time to tackle any work or projects
        that have been lingering on your to-do list. Your meticulous approach
        can lead to efficient outcomes, but be mindful not to overthink or
        become too critical of yourself.
      </div>
      <div className="daily-reading">
        Love: In matters of the heart, communication is essential. Express your
        thoughts and feelings openly with your partner, and listen actively to
        their perspective as well. Single Virgos might find themselves attracted
        to someone who shares their intellectual interests.
      </div>
      <div className="daily-reading">
        Career: Your methodical approach is valued in the workplace. Consider
        organizing your tasks and setting priorities to maximize productivity.
      </div>
      <div className="daily-reading">
        Health: Focus on maintaining a balanced routine that supports your
        physical and mental well-being. Incorporate healthy habits, such as
        nutritious meals, exercise, and relaxation techniques.
      </div>
      <div className="daily-reading">
        Remember, Virgo, your horoscope provides a lighthearted look at the
        day's energies. Embrace your attention to detail while also allowing
        yourself to enjoy moments of relaxation and spontaneity.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyVirgo;
