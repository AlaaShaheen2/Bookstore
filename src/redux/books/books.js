import bookInfo from '../bookInfo';

const ADD_BOOK = 'my_app/books/ADD_BOOK';
const REMOVE_BOOK = 'my_app/books/REMOVE_BOOK';
const initState = [
  {
    id: '0',
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
  },
  {
    id: '1',
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt and Dave Thomas',
  },
  {
    id: '2',
    title: 'Code Complete',
    author: 'Steve McConnell',
  },
];
const add = (state, info) => {
  const expected = bookInfo(info);
  const expecteds = [...state, expected];
  return expecteds;
};
const remove = (state, id) => {
  const info = state.filter((x) => x.id !== id);
  return info;
};
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return add(state, action.info);
    case REMOVE_BOOK:
      return remove(state, action.id);
    default:
      return state;
  }
};

const addBoook = (info) => ({ type: ADD_BOOK, info });
const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export { addBoook, removeBook };
export default reducer;
