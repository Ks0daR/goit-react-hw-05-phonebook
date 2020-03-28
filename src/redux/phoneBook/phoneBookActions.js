import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('phoneBook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phoneBook/fetchContactsSuccess');
const fetchContactsError = createAction('phoneBook/fetchContactsError');

const addContactRequest = createAction('phoneBook/addContactRequest');
const addContactSuccess = createAction('phoneBook/addContactSuccess');
const addContactError = createAction('phoneBook/addContactError');

const removeContactRequest = createAction('phoneBook/removeContactRequest');
const removeContactSuccess = createAction('phoneBook/removeContactSuccess');
const removeContactError = createAction('phoneBook/removeContactError');

const changeFilter = createAction('phoneBook/filtered');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
};
