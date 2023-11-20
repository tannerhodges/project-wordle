import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';

function Guess({ word, answer }) {
  if (!word) {
    return (
      <p className="guess">
        {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  const letters = checkGuess(word, answer);
  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span key={`${index}-${letter}`} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
