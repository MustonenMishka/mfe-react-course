import { ISetApiStateAction } from './actions';
import { ActionTypeEnum } from './actionTypes';
import { ITodosApiState } from '../types';

export const setApiStateAC = (todosApiState: ITodosApiState): ISetApiStateAction => {
  return {
    type: ActionTypeEnum.SET_API_STATE,
    payload: todosApiState,
  };
};
