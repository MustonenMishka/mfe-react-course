import { combineReducers } from 'redux';

import TodosReducer from './Todos/reducer';

const rootReducer = combineReducers({
  Todos: TodosReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
