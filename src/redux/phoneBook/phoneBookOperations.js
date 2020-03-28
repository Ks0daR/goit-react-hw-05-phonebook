import axios from 'axios';
import {
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

axios.defaults.baseURL = 'http://goit-phonebook-api.herokuapp.com/v1/';
axios.defaults.headers.common['Authorization'] =
  'fbe9c05a-6813-409a-a679-7781d523ce31';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', JSON.stringify({ name, number }))
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export { addContact, removeContact, fetchContacts };
