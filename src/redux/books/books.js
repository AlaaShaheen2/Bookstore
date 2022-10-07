/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { keys } from 'lodash';
import status from '../status';

const createBook = (info) => ({
  item_id: info.id,
  ...info,
});

const main = 'my_app/books';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lrfVUy1HXgzbwRh1Fa9Z/books';
const setting = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};
const getBook = createAsyncThunk(
  `${main}/getBook`,
  async () => {
    const result = await axios.get(apiUrl, setting);
    return result.data;
  },
);

const addBook = createAsyncThunk(
  `${main}/ADD_BOOK`,
  async (info, thunkAPI) => {
    const book = createBook(info);
    const response = await axios.post(apiUrl, book, setting);
    const responseStatus = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
    if (responseStatus.status === 201) thunkAPI.dispatch(getBook());
    return responseStatus;
  },
);
const endPointId = (itemId) => `${apiUrl}/${itemId}`;

const deleteBook = createAsyncThunk(
  `${main}/DELETEBOOK`,
  async (itemId, thunkAPI) => {
    const response = await axios.delete(endPointId(itemId), setting);

    const responseStatus = {
      info: response.info,
      status: response.status,
      statusText: response.statusText,
    };
    if (responseStatus.status === 201) thunkAPI.dispatch(getBook());
    return responseStatus;
  },
);
const booksSlice = createSlice({
  name: main,
  initialState: {
    loading: status.normal,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = status.succeeded;
        const Ids = keys(action.payload);
        state.books = Ids.map((item_id) => ({
          item_id,
          ...action.payload[item_id][0],
        }));
      })
      .addCase(getBook.rejected, (state) => {
        state.loading = status.failed;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loading = status.succeeded;
      })
      .addCase(addBook.rejected, (state) => {
        state.loading = status.failed;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = status.succeeded;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = status.failed;
      });
  },
});
const { actions, reducer } = booksSlice;
export {
  actions,
  getBook,
  addBook,
  deleteBook,
};

export default reducer;
