import React, { useState } from 'react';
import './Birthdate.css';
import { isBefore, isAfter, isValid } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Birthdate: React.FC = () => {
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days: number[] = Array.from({ length: 31 }, (_, i) => i + 1); // Generate days 1 - 31
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  ); // Starting from 1900

  const [month, setMonth] = useState<string>(''); // State to hold the selected month
  const [day, setDay] = useState<number>(0); // State to hold the selected day
  const [year, setYear] = useState<number>(0); // State to hold the selected year
  const [isDateValid, setIsDateValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };

  const handleFindMySign = () => {
    if (month && day && year) {
      const valid = validateDate(month, day, year);
      setIsDateValid(valid);

      if (valid) {
        const zodiacSign = determineZodiacSign(month, day);
        navigate(`/findyoursign/${zodiacSign}`); // Redirect to the zodiac sign page
      }
    }
  };

  const determineZodiacSign = (month: string, day: number): string => {
    // Determine zodiac sign based on birthdate
    switch (month) {
      case 'March':
        return day <= 20 ? 'pisces' : 'aries';
      case 'April':
        return day <= 19 ? 'aries' : 'taurus';
      case 'May':
        return day <= 20 ? 'taurus' : 'gemini';
      case 'June':
        return day <= 21 ? 'gemini' : 'cancer';
      case 'July':
        return day <= 22 ? 'cancer' : 'leo';
      case 'August':
        return day <= 22 ? 'leo' : 'virgo';
      case 'September':
        return day <= 22 ? 'virgo' : 'libra';
      case 'October':
        return day <= 22 ? 'libra' : 'scorpio';
      case 'November':
        return day <= 21 ? 'scorpio' : 'sagittarius';
      case 'December':
        return day <= 21 ? 'sagittarius' : 'capricorn';
      case 'January':
        return day <= 19 ? 'capricorn' : 'aquarius';
      case 'February':
        return day <= 18 ? 'aquarius' : 'pisces';

      default:
        return '';
    }
  };

  const validateDate = (month: string, day: number, year: number): boolean => {
    // Implement date validation logic here
    const selectedDate = new Date(
      `${year}-${months.indexOf(month) + 1}-${day}`
    );

    const minDate = new Date('1900-01-01');
    const maxDate = new Date(); // Today's date

    // Check if selected day is valid for the chosen month and year
    const isValidDay =
      day >= 1 && day <= new Date(year, months.indexOf(month) + 1, 0).getDate();

    return (
      isValid(selectedDate) &&
      isValidDay &&
      isAfter(selectedDate, minDate) &&
      isBefore(selectedDate, maxDate)
    );
  };

  return (
    <div>
      <div className="error-box">
        {!isDateValid && (
          <p className="error-message">Please enter a valid date.</p>
        )}
      </div>
      <div className="birthdate-container">
        <select className="select" value={month} onChange={handleMonthChange}>
          <option value="">Month</option> {/* Default empty value */}
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          className="select"
          value={day === 0 ? '' : day}
          onChange={handleDayChange}
        >
          <option value="">Day</option> {/* Default empty value */}
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          className="select"
          value={year === 0 ? '' : year}
          onChange={handleYearChange}
        >
          <option value="">Year</option> {/* Default empty value */}
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button className="find-my-sign" onClick={handleFindMySign}>
          Find My Sign
        </button>
      </div>
    </div>
  );
};

export default Birthdate;
