import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getContacts,
  getFilter,
} from '../../redux/phoneBook/phoneBookSelectors';
import { changeFilter } from '../../redux/phoneBook/phoneBookActions';
import styles from './FilterForm.module.css';

function FilterForm({ filterValue, contacts, onSearchQuery }) {
  if (contacts.length === 1) {
    onSearchQuery();
  }
  return (
    <label className={styles.search}>
      {contacts.length > 1 && (
        <input
          value={filterValue}
          onChange={e => onSearchQuery(e.target.value)}
        />
      )}
    </label>
  );
}

FilterForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: getFilter(state),
  contacts: getContacts(state),
});

const mapDispatchToProps = {
  onSearchQuery: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
