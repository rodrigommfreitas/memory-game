/* eslint-disable react/prop-types */
import React from 'react';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className='game__scoreboard'>
      <h3 className='game__scoreboard__current'>Current Score: {score}</h3>
      <h3 className='game__scoreboard__best'> Best Score: {bestScore}</h3>
    </div>
  );
};

export default Scoreboard;
