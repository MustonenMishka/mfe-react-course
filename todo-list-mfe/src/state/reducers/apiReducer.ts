import produce from 'immer';

import { ActionTypeEnum } from '../actionTypes';
import { Action } from '../actions';
import { ITodosApiState } from '../../types';

const initialState: ITodosApiState = {
  todos: null,
  getTodosStatus: null,
  addTodoStatus: null,
};

const apiReducer = produce((state: ITodosApiState = initialState, action: Action): ITodosApiState => {
  switch (action.type) {
    case ActionTypeEnum.SET_API_STATE:
      state = action.payload;
      return state;

    default:
      return state;
  }
}, initialState);

export default apiReducer;
