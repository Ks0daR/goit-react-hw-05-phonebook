import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeActions';
import { getTheme } from '../../redux/theme/themeSelectors';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';
import animateStyles from './animateStyles.module.css';

const Header = ({ theme, onToggle }) => (
  <>
    <CSSTransition in={true} timeout={500} classNames={animateStyles}>
      <div className={styles.Header}>
        <h1 className={theme ? styles.Title : styles.TitleDark}>Phone Book</h1>
      </div>
    </CSSTransition>
    <button
      className={theme ? styles.Button : styles.ButtonDark}
      type="button"
      onClick={() => onToggle()}
    >
      {theme ? 'Dark' : 'Light'}
    </button>
    <p className={theme ? null : styles.TextDark}>
      Active theme {theme ? 'Light' : 'Dark'}
    </p>
  </>
);

Header.propTypes = {
  theme: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ theme: getTheme(state) });

const mapDispatchToProps = {
  onToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
