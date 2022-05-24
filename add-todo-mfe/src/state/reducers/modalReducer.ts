import produce from 'immer';

import { ActionTypeEnum } from '../actionTypes';
import { Action } from '../actions';

export interface IModalState {
  isOpen: boolean;
}

const initialState: IModalState = {
  isOpen: false,
};

const modalReducer = produce((state: IModalState = initialState, action: Action): IModalState => {
  switch (action.type) {
    case ActionTypeEnum.TOGGLE_MODAL_OPEN:
      state.isOpen = action.payload;
      return state;

    default:
      return state;
  }
}, initialState);

export default modalReducer;
