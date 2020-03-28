import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './phoneBookActions';

const contactsBase = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(element => payload !== element.id),
});

const filter = createReducer('', {
  [changeFilter.type]: (state, { payload }) => payload,
});

const loader = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const error = createReducer(
  {},
  {
    [fetchContactsError]: (state, { payload }) => payload,
    [addContactError]: (state, { payload }) => payload,
    [removeContactError]: (state, { payload }) => payload,
  },
);

export default combineReducers({ contactsBase, filter, loader, error });
