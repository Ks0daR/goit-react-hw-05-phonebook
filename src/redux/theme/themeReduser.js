import { createReducer } from '@reduxjs/toolkit';
import { toggleTheme } from './themeActions';

const theme = createReducer(true, {
  [toggleTheme]: state => !state,
});

export default theme;
