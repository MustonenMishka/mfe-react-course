import { GlobalStore } from 'redux-micro-frontend';
import { IAddTodoFormData } from './types';

export const globalStore = GlobalStore.Get();

export const addTodo = (todo: IAddTodoFormData) => {
  globalStore.DispatchGlobalAction('AddTodoMFE', {
    type: 'API/TODOS/ADD',
    payload: todo,
  });
};

export const clearAddTodoStatus = () => {
  globalStore.DispatchGlobalAction('AddTodoMFE', {
    type: 'API/TODOS/CLEAR_ADD_STATUS',
    payload: null,
  });
};
