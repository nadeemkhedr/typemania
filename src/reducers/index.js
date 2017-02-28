import { combineReducers } from 'redux';
import blocks, * as fromBlocks from './blocks'
import words, * as fromWords from './words'
import input from './input';

const rootReducer = combineReducers({
  words,
  blocks,
  input
});

export default rootReducer;

export const getMatchingWords = (state, text) =>
  fromWords.getMatchingWords(state.words, text);

export const getEmptyBlocks = state =>
  fromBlocks.getEmptyBlocks(state.blocks);
