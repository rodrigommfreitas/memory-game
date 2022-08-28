import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import Deck from './Deck';
import Finish from './Finish';

const Game = () => {
  const TOTAL_POKEMONS = 151;
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

  return (
    <div className='game'>
      <Scoreboard score={score} bestScore={bestScore} />
      {score < TOTAL_POKEMONS ? (
        <Deck
          addScore={addScore}
          resetScore={resetScore}
          TOTAL_POKEMONS={TOTAL_POKEMONS}
        />
      ) : (
        <Finish />
      )}
    </div>
  );
};

export default Game;
