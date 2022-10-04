const initState = {
  categories: [],
};

const CHECK_STATUS = 'my_app/categories/CHECK_STATUS';

const status = () => 'Under construction';

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS: return status();
    default: return state;
  }
};

const statusCheck = () => ({ type: CHECK_STATUS });

export default reducer;
export { statusCheck };
