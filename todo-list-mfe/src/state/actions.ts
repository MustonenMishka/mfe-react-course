import { ActionTypeEnum } from './actionTypes';
import { ITodosApiState } from '../types';

export interface ISetApiStateAction {
  type: ActionTypeEnum.SET_API_STATE;
  payload: ITodosApiState;
}

export type Action = ISetApiStateAction;
