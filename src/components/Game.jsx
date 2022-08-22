import React, { useState } from 'react';

const Game = () => {
  const totalPokemons = 151;
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addScore = () => {
    const newScore = score + 1;
    if (newScore > bestScore) setBestScore(newScore);
    setScore(newScore);
  };
  const resetScore = () => {
    setScore(0);
  };

  return <div>Game</div>;
};

export default Game;
