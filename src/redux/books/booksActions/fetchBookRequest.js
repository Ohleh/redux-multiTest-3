import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchBooksRequest = createAction('books/fetchBooksRequest');
// fulfielld
export const fetchBooksSuccess = createAction('books/fetchBooksSuccess');
// pending
export const fetchBooksError = createAction('books/fetchBooksError');
