import React from 'react';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { getVisibleContacts } from '../../redux/phoneBook/phoneBookSelectors';
import { changeFilter } from '../../redux/phoneBook/phoneBookActions';
import { removeContact } from '../../redux/phoneBook/phoneBookOperations';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Contacts.module.css';
import animatedStyles from './animatedStyles.module.css';

const Contacts = ({ elements, theme, onRemove }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <TransitionGroup component="ul" className={styles.list}>
        {elements.length > 0
          ? elements.map(({ id, name, number }) => (
              <CSSTransition key={id} timeout={250} classNames={animatedStyles}>
                <ContactListItem
                  id={id}
                  name={name}
                  number={number}
                  onRemove={() => onRemove(id, elements.length)}
                  theme={theme}
                />
              </CSSTransition>
            ))
          : null}
      </TransitionGroup>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  theme: getTheme(state),
  elements: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: (id, count) => {
    if (count < 2) {
      dispatch(changeFilter(''));
    }
    dispatch(removeContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
