import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchPhraseRedux';

//selectors

// action creators

//Subreducers

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchPhrase: searchStringReducer(state.searchPhrase, action),
//   };
//   return newState;
// };

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchPhrase: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
