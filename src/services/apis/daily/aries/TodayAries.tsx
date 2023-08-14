import React, { Component } from 'react';

interface TodayAriesState {
  json: {
    current_date: string;
    compatibility: string;
    lucky_number: number;
    lucky_time: string;
    color: string;
    date_range: string;
    mood: string;
    description: string;
  };
}

class TodayAries extends Component<{}, TodayAriesState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      json: {
        current_date: '',
        compatibility: '',
        lucky_number: 0,
        lucky_time: '',
        color: '',
        date_range: '',
        mood: '',
        description: '',
      },
    };
  }

  componentDidMount() {
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(URL, {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ json });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }

  render() {
    const { json } = this.state;
    return (
      <div>
        Current Date: {json.current_date} <br />
        Compatibility: {json.compatibility} <br />
        LuckyNumber: {json.lucky_number} <br />
        LuckyTime: {json.lucky_time} <br />
        Color: {json.color} <br />
        Date Range: {json.date_range} <br />
        Mood: {json.mood} <br />
        Description: {json.description} <br />
      </div>
    );
  }
}

export default TodayAries;
