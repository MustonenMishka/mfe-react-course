import { ActionTypeEnum } from './actionTypes';

export interface IToggleModalOpenAction {
  type: ActionTypeEnum.TOGGLE_MODAL_OPEN;
  payload: boolean;
}

export type Action = IToggleModalOpenAction;
