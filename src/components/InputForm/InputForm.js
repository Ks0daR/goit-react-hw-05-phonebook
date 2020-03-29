import React, { Component } from 'react';
import Error from '../Error';
import { connect } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { getContacts } from '../../redux/phoneBook/phoneBookSelectors';
import { addContact } from '../../redux/phoneBook/phoneBookOperations';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './InputForm.module.css';
import animatedStyles from './animatedStyles.module.css';

class InputForm extends Component {
  static propTypes = {
    theme: PropTypes.bool.isRequired,
    getInfo: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    error: false,
  };

  getInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    if (this.checkedDoubleInput(this.state.name)) {
      this.setState({ error: true });
      return;
    }
    this.props.getInfo(this.state.name, this.state.number);
    this.setState({ name: '', number: '', error: false });
  };

  checkedDoubleInput = name => {
    return this.props.contacts.some(contact => contact.name === name);
  };

  changeValue = () => {
    this.setState({ error: false });
  };

  render() {
    const { name, number, error } = this.state;
    const { theme } = this.props;

    return (
      <>
        <CSSTransition
          in={error}
          timeout={500}
          classNames={animatedStyles}
          onEntered={this.changeValue}
          unmountOnExit
        >
          <Error />
        </CSSTransition>
        <form className={styles.Form} onSubmit={this.hendleSubmit}>
          <label>
            <h3 className={theme ? styles.Title : styles.TitleDark}>Name:</h3>
            <input
              value={name}
              placeholder="Enter name..."
              name="name"
              onChange={this.getInputValue}
            />
            <h3 className={theme ? styles.title : styles.TitleDark}>
              Phone number:
            </h3>
            <input
              value={number}
              name="number"
              onChange={this.getInputValue}
              placeholder="Enter phone..."
            />
            <br />
            <button
              className={theme ? styles.Submit : styles.SubmitDark}
              type="submit"
            >
              Add contact
            </button>
            <br />
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  theme: getTheme(state),
  contacts: getContacts(state),
});
const mapDispatchToProps = {
  getInfo: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
