import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeReduser';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const store = configureStore({
  reducer: { theme: themeReducer, contacts: phoneBookReducer },
});

export default store;
