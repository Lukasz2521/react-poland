import React, { Component } from 'react';
import CalendarComponent from './CalendarComponent';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Terminplaner</h2>
          <div className="control">
            <span className="prev">&lt;</span>
            <span className="date">6 &mdash; 12. Juli 2015</span>
            <span className="next">&gt;</span>
          </div>
          <span className="month"></span>
          <span className="slider"></span>
        </div>
        <CalendarComponent />
      </div>
    );
  }
}

export default App;
