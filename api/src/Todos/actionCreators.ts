import {
  IAddTodoAcceptedAction,
  IAddTodoDeniedAction,
  IAddTodoStartAction,
  IGetTodosAcceptedAction,
  IGetTodosDeniedAction,
  IGetTodosStartAction,
  TodosAction,
} from './actions';
import { TodosActionTypeEnum } from './actionTypes';
import { ITodo, IAddTodoFormData } from './types';
import { RootState } from '../rootReducer';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { axiosInst } from '../axiosInstance';
import { getId, getTimestamp } from './utils';

export const getTodosStartAC = (): IGetTodosStartAction => {
  return {
    type: TodosActionTypeEnum.TODOS_GET_START,
  };
};
export const getTodosAcceptedAC = (todos: ITodo[]): IGetTodosAcceptedAction => {
  return {
    type: TodosActionTypeEnum.TODOS_GET_ACCEPTED,
    payload: todos,
  };
};
export const getTodosDeniedAC = (): IGetTodosDeniedAction => {
  return {
    type: TodosActionTypeEnum.TODOS_GET_DENIED,
  };
};

export const addTodoStartAC = (): IAddTodoStartAction => {
  return {
    type: TodosActionTypeEnum.TODO_ADD_START,
  };
};
export const addTodoAcceptedAC = (): IAddTodoAcceptedAction => {
  return {
    type: TodosActionTypeEnum.TODO_ADD_ACCEPTED,
  };
};
export const addTodoDeniedAC = (): IAddTodoDeniedAction => {
  return {
    type: TodosActionTypeEnum.TODO_ADD_DENIED,
  };
};

export const getTodosThunk = () => {
  return async (dispatch: Dispatch<TodosAction>, getState: () => RootState) => {
    dispatch(getTodosStartAC());
    try {
      const getTodosResponse: AxiosResponse<ITodo[]> = await axiosInst.get('/todos');
      dispatch(getTodosAcceptedAC(getTodosResponse.data));
    } catch (e) {
      dispatch(getTodosDeniedAC());
      console.log('Error fetching todos', e);
    }
  };
};

export const addTodoThunk = (addTodoFormData: IAddTodoFormData) => {
  return async (dispatch: Dispatch<TodosAction>, getState: () => RootState) => {
    dispatch(addTodoStartAC());
    try {
      const newTodo: ITodo = {
        ...addTodoFormData,
        id: getId(),
        ts: getTimestamp(),
      };
      await axiosInst.post('/todos', newTodo);
      dispatch(addTodoAcceptedAC());
      await getTodosThunk()(dispatch, getState);
    } catch (e) {
      dispatch(addTodoDeniedAC());
      console.log('Error adding todo', e);
    }
  };
};
