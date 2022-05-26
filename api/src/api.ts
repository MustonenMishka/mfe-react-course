import { applyMiddleware, createStore } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import apiMiddleware from './APIMiddleware';
import { TodosActionTypeEnum } from './Todos/actionTypes';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware)));

const globalStore = GlobalStore.Get();
globalStore.RegisterStore('API', store);
globalStore.RegisterGlobalActions('API', [
  TodosActionTypeEnum.API_TODOS_GET,
  TodosActionTypeEnum.API_TODO_ADD,
  TodosActionTypeEnum.API_TODOS_CLEAR_ADD_STATUS,
]);