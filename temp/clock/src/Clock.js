import './Clock.css';
import React from 'react';

const Clock = (props) => {
  return (
    <div className="clock">{props.time}</div>
  )
};

export default Clock;
