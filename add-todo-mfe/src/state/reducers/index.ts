import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import ApiReducer from './apiReducer';

export const reducers = combineReducers({
  modal: modalReducer,
  api: ApiReducer,
});

export type RootState = ReturnType<typeof reducers>;
