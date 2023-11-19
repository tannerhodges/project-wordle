import React from 'react';
import { EMPTY_WORD } from '../../constants';

function Guess({ word }) {
  const letters = (word || EMPTY_WORD).split('');
  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={`${index}-${letter}`} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
