import { combineReducers } from 'redux';

import ApiReducer from './apiReducer';

export const reducers = combineReducers({
  api: ApiReducer,
});

export type RootState = ReturnType<typeof reducers>;
