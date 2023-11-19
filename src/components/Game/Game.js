import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    const nextGuesses = [...guesses];
    nextGuesses.push({
      word: guess,
      id: crypto.randomUUID(),
    });
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
