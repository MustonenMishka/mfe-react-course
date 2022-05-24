import { combineReducers } from 'redux';

import modalReducer from './modalReducer';

export const reducers = combineReducers({
  modal: modalReducer,
});

export type RootState = ReturnType<typeof reducers>;
