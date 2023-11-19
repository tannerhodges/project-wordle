import React from 'react';

import { range, sample } from '../../utils';
import { EMPTY_WORD, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((index) => ({
  word: EMPTY_WORD,
  id: crypto.randomUUID(),
}));

function Game() {
  const [guesses, setGuesses] = React.useState(initialGuesses);
  const [numGuess, setNumGuess] = React.useState(0);

  function addGuess(guess) {
    if (numGuess >= NUM_OF_GUESSES_ALLOWED) {
      console.warn('No more guesses!');
      return;
    }
    const nextGuesses = [...guesses];
    nextGuesses[numGuess] = {
      word: guess,
      id: crypto.randomUUID(),
    };
    setGuesses(nextGuesses);
    setNumGuess(numGuess + 1);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
