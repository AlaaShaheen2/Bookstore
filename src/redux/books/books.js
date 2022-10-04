import bookInfo from "../bookInfo";

const ADD_BOOK = 'my_app/books/ADD_BOOK';
const REMOVE_BOOK = 'my_app/books/REMOVE_BOOK';
const initState = {
  books: [],
};

const add = (state, info) => [...state.books, bookInfo(info)];
const remove = (state, bookID) => state.books.filter((x) => x.bookID !== bookID);
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return add(state, action.info);
    case REMOVE_BOOK:
      return remove(state);
    default:
      return state;
  }
};

const addBoook = (info) => ({ type: ADD_BOOK, info });
const removeBook = (bookID) => ({ type: REMOVE_BOOK, bookID });

export { addBoook, removeBook };
export default reducer;