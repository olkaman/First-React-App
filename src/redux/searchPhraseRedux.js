//selectors
export const getSearchPhrase = (state) => state.searchPhrase;

const ADD_SEARCHED_VALUE = 'app/lists/ADD_SEARCHED_VALUE';

//actions
export const updateSearchString = (payload) => ({
  type: ADD_SEARCHED_VALUE,
  payload,
});

//subreducer
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case ADD_SEARCHED_VALUE:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
