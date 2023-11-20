import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { range, sample } from '../../utils';
import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((index) => ({
  word: '',
  id: crypto.randomUUID(),
}));

function Game() {
  const [status, setStatus] = React.useState('playing');
  const [guesses, setGuesses] = React.useState(initialGuesses);
  const [numGuess, setNumGuess] = React.useState(0);

  function addGuess(guess) {
    if (status !== 'playing') {
      console.warn('No more guesses!');
      return;
    }

    const nextGuesses = [...guesses];
    nextGuesses[numGuess] = {
      word: guess,
      id: crypto.randomUUID(),
    };
    setGuesses(nextGuesses);

    const nextNumGuess = numGuess + 1;
    setNumGuess(nextNumGuess);

    if (guess === answer) {
      setStatus('won');
    } else if (nextNumGuess >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      {status === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {numGuess} {numGuess > 1 ? 'guesses' : 'guess'}
            </strong>
            .
          </p>
        </div>
      )}
      {status === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={status !== 'playing'} />
    </>
  );
}

export default Game;
