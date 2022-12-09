import shortid from 'shortid';

const ADD_COLUMN = 'app/lists/ADD_COLUMN';

//selectors
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({ columns }, listID) =>
  columns.filter((column) => column.listId === listID);

//actions
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

//subreducer
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
