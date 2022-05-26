import { TodosActionTypeEnum } from './actionTypes';
import { ITodo } from './types';

export interface IApiGetTodosAction {
  type: TodosActionTypeEnum.API_TODOS_GET;
}
export interface IGetTodosStartAction {
  type: TodosActionTypeEnum.TODOS_GET_START;
}
export interface IGetTodosAcceptedAction {
  type: TodosActionTypeEnum.TODOS_GET_ACCEPTED;
  payload: ITodo[];
}
export interface IGetTodosDeniedAction {
  type: TodosActionTypeEnum.TODOS_GET_DENIED;
}

export interface IApiAddTodoAction {
  type: TodosActionTypeEnum.API_TODO_ADD;
  payload: ITodo;
}
export interface IAddTodoStartAction {
  type: TodosActionTypeEnum.TODO_ADD_START;
}
export interface IAddTodoAcceptedAction {
  type: TodosActionTypeEnum.TODO_ADD_ACCEPTED;
}
export interface IAddTodoDeniedAction {
  type: TodosActionTypeEnum.TODO_ADD_DENIED;
}
export interface IApiClearAddTodoStatusAction {
  type: TodosActionTypeEnum.API_TODOS_CLEAR_ADD_STATUS;
}

export type TodosAction =
  | IApiGetTodosAction
  | IGetTodosStartAction
  | IGetTodosAcceptedAction
  | IGetTodosDeniedAction
  | IApiAddTodoAction
  | IAddTodoStartAction
  | IAddTodoAcceptedAction
  | IAddTodoDeniedAction
  | IApiClearAddTodoStatusAction;
