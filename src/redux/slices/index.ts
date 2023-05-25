import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import home from './home';
import checkout from './checkout';
import category from './category';
import store from './store';

export const reducer = combineReducers({
  auth,
  category,
  home,
  checkout,
  store,
});
