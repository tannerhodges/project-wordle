import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ word, id }) => (
        <Guess key={id} word={word} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
