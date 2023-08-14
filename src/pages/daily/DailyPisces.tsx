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
        Love: Today, your relationships are in focus. Express your emotions and
        show appreciation to your loved ones. A thoughtful gesture or
        conversation can strengthen your bonds.
      </div>
      <div className="daily-reading">
        Career: You're full of energy and enthusiasm. Take the lead on a project
        and showcase your innovative ideas. Your determination will make a
        positive impression on colleagues and superiors.
      </div>
      <div className="daily-reading">
        Health: Make time for physical activity. Engaging in a workout or
        outdoor activity will help you release any pent-up energy and keep your
        mind and body in balance.
      </div>
      <div className="daily-reading">
        Finance: Stay mindful of your spending today. Consider creating a budget
        to track your expenses and avoid unnecessary purchases.
      </div>
      <div className="daily-reading">
        Embrace the day with confidence, and remember that your assertiveness
        can lead to positive outcomes in various aspects of your life.
      </div>
      <GoBackBtn />
    </div>
  );
};

export default DailyPisces;
