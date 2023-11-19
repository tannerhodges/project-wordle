import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ word, id }) => (
        <Guess key={id} word={word} />
      ))}
    </div>
  );
}

export default GuessResults;
