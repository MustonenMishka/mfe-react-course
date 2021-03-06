import { ISetApiStateAction, IToggleModalOpenAction } from './actions';
import { ActionTypeEnum } from './actionTypes';
import { ITodosApiState } from '../types';

export const toggleModalOpenAC = (isOpen: boolean): IToggleModalOpenAction => {
  return {
    type: ActionTypeEnum.TOGGLE_MODAL_OPEN,
    payload: isOpen,
  };
};

export const setApiStateAC = (todosApiState: ITodosApiState): ISetApiStateAction => {
  return {
    type: ActionTypeEnum.SET_API_STATE,
    payload: todosApiState,
  };
};
