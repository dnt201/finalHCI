import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import home from './home';
import category from './category';
import store from './store';

export const reducer = combineReducers({
  auth,
  category,
  home,
  store,
});
