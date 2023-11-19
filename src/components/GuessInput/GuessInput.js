import React from 'react';

function GuessInput({ addGuess }) {
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
        pattern="[a-zA-Z]{5}"
        title="5 letters"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
