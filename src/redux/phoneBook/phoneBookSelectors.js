import { createSelector } from '@reduxjs/toolkit';

const getLoader = state => state.contacts.loader;

const getError = state => state.contacts.error;

const getContacts = state => state.contacts.contactsBase;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getVisibleContacts, getFilter, getLoader, getError, getContacts };
