/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({
  pokemonIndex,
  evaluateCardIndex,
  imageSource,
  pokemonName,
}) => {
  return (
    <div className='card' onClick={() => evaluateCardIndex(pokemonIndex)}>
      <img src={imageSource} />
      <p>{pokemonName}</p>
    </div>
  );
};

export default Card;
