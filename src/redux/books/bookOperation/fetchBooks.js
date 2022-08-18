import { applyMiddleware } from '@reduxjs/toolkit';
import * as booksAction from '../booksActions';
import * as bookShelfApi from '../../../services/bookShelfApi';

export const fetchBooks = () => async dispatch => {
  dispatch(booksAction.fetchBooksRequest());

  try {
    const books = await bookShelfApi.getPokyId();
    dispatch(booksAction.fetchBooksSuccess(books));
  } catch (error) {
    dispatch(booksAction.fetchBooksError(error));
  }
};
