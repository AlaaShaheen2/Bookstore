import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducers = {
  books: bookReducer,
  categories: categoryReducer,
};

const store = configureStore({
  reducers,
});

export default store;
