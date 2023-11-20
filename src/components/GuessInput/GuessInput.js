import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
        title={`${NUM_OF_LETTERS_PER_WORD} letters`}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={disabled === true}
      />
    </form>
  );
}

export default GuessInput;
