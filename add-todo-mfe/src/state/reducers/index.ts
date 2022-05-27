import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import apiReducer from './apiReducer';

export const reducers = combineReducers({
  modal: modalReducer,
  api: apiReducer,
});

export type RootState = ReturnType<typeof reducers>;
