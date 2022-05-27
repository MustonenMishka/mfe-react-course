import { IApiClearErrorAction, IApiSetErrorAction } from './actions';
import { ErrorActionTypeEnum } from './actionTypes';
import { INetworkError } from './types';
import { Dispatch } from 'redux';
import { TodosAction } from '../Todos/actions';
import { RootState } from '../rootReducer';
import { axiosInst } from '../axiosInstance';
import { getTodosDeniedAC, getTodosStartAC } from '../Todos/actionCreators';

export const setErrorAC = (errorData: INetworkError): IApiSetErrorAction => {
  return {
    type: ErrorActionTypeEnum.API_ERROR_SET,
    payload: errorData,
  };
};

export const imitateErrorThunk = () => {
  return async (dispatch: Dispatch<TodosAction>, getState: () => RootState) => {
    dispatch(getTodosStartAC());
    try {
      await axiosInst.get('/unknown-route');
    } catch (e) {
      dispatch(getTodosDeniedAC());
      console.log('Error fetching todos', e);
    }
  };
};
