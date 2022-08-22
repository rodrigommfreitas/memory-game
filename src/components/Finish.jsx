import React from 'react';

const Finish = () => {
  return (
    <>
      <p className='finish-message'>
        Congratulations! You got all 151 pokémons!
      </p>
      <button
        className='play-again'
        onClick={() => window.location.reload('true')}
      >
        PLAY AGAIN
      </button>
    </>
  );
};

export default Finish;
