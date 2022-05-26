import produce from 'immer';

import { TodosAction } from './actions';
import { TodosActionTypeEnum } from './actionTypes';
import { ITodo } from './types';
import { RequestStatusEnum } from '../types';

interface ITodosApiState {
  todos: ITodo[] | null;
  getTodosStatus: RequestStatusEnum | null;
  addTodoStatus: RequestStatusEnum | null;
}

const initialState: ITodosApiState = {
  todos: null,
  getTodosStatus: null,
  addTodoStatus: null,
};

const reducer = produce((state: ITodosApiState = initialState, action: TodosAction): ITodosApiState => {
  switch (action.type) {
    case TodosActionTypeEnum.TODOS_GET_START:
      state.getTodosStatus = RequestStatusEnum.LOADING;
      return state;
    case TodosActionTypeEnum.TODOS_GET_ACCEPTED:
      state.todos = action.payload;
      state.getTodosStatus = RequestStatusEnum.ACCEPTED;
      return state;
    case TodosActionTypeEnum.TODOS_GET_DENIED:
      state.getTodosStatus = RequestStatusEnum.DENIED;
      return state;

    case TodosActionTypeEnum.TODO_ADD_START:
      state.addTodoStatus = RequestStatusEnum.LOADING;
      return state;
    case TodosActionTypeEnum.TODO_ADD_ACCEPTED:
      state.addTodoStatus = RequestStatusEnum.ACCEPTED;
      return state;
    case TodosActionTypeEnum.TODO_ADD_DENIED:
      state.addTodoStatus = RequestStatusEnum.DENIED;
      return state;
    case TodosActionTypeEnum.API_TODOS_CLEAR_ADD_STATUS:
      state.addTodoStatus = null;
      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
