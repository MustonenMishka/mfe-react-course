import { applyMiddleware, createStore } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import apiMiddleware from './APIMiddleware';
import { TodosActionTypeEnum } from './Todos/actionTypes';
import { ErrorActionTypeEnum } from './Error/actionTypes';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware)));

export const globalStore = GlobalStore.Get();
globalStore.RegisterStore('API', store);
globalStore.RegisterGlobalActions('API', [
  TodosActionTypeEnum.API_TODOS_GET,
  TodosActionTypeEnum.API_TODO_ADD,
  TodosActionTypeEnum.API_TODOS_CLEAR_ADD_STATUS,
  TodosActionTypeEnum.API_TODO_DELETE,

  ErrorActionTypeEnum.API_ERROR_CLEAR,
  ErrorActionTypeEnum.API_ERROR_IMITATE,
]);
