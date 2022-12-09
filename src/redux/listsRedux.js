import shortid from 'shortid';

const ADD_LIST = 'app/lists/ADD_LIST';

//selectors
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

//actions
export const addList = (payload) => ({ type: ADD_LIST, payload });

//subreducer
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default listsReducer;
