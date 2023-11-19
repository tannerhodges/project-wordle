import { range } from './utils';

export const NUM_OF_GUESSES_ALLOWED = 6;
export const NUM_OF_LETTERS_PER_WORD = 5;
export const EMPTY_WORD = range(0, NUM_OF_LETTERS_PER_WORD)
  .map(() => ' ')
  .join('');
