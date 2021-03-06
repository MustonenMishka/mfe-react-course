import { ActionTypeEnum } from './actionTypes';
import { ITodosApiState } from '../types';

export interface IToggleModalOpenAction {
  type: ActionTypeEnum.TOGGLE_MODAL_OPEN;
  payload: boolean;
}

export interface ISetApiStateAction {
  type: ActionTypeEnum.SET_API_STATE;
  payload: ITodosApiState;
}

export type Action = IToggleModalOpenAction | ISetApiStateAction;
