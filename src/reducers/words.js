import { combineReducers } from 'redux';
import { WORD_REMOVE, WORD_ADD } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch(action.type) {
    case WORD_ADD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          text: action.text
        }
      };
    case WORD_REMOVE:
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch(action.type) {
    case WORD_ADD:
      return [...state, action.id];
    case WORD_REMOVE:
      return state.filter(s => s !== action.id);
    default:
      return state;
  }
};


const wordsReducer = combineReducers({
  byId,
  allIds
});

export default wordsReducer;

export const getAllWords = state =>
  state.allIds.map(id => ({...state.byId[id]}));

export const getWordsByIds = (state, wordsIds) =>
  wordsIds.map(id => ({...state.byId[id]}));

export const getMatchingWords = (state, text) =>
  getAllWords(state).filter(w => w.text === text);
