import { combineReducers } from 'redux';

import todosReducer from './Todos/reducer';
import errorReducer from './Error/reducer';

const rootReducer = combineReducers({
  Todos: todosReducer,
  Error: errorReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
