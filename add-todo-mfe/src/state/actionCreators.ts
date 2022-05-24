import { IToggleModalOpenAction } from './actions';
import { ActionTypeEnum } from './actionTypes';

export const toggleModalOpenAC = (isOpen: boolean): IToggleModalOpenAction => {
  return {
    type: ActionTypeEnum.TOGGLE_MODAL_OPEN,
    payload: isOpen,
  };
};
