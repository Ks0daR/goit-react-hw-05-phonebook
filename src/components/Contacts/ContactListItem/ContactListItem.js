import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactIlstItem.module.css';

function ContactListItem({ id, name, number, theme, onRemove }) {
  return (
    <li className={theme ? styles.ListElement : styles.ListElementDark}>
      {name} {number}
      <button
        type="button"
        className={theme ? styles.Button : styles.ButtonDark}
        onClick={() => onRemove(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  theme: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
