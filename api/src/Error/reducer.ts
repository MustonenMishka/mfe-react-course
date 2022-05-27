import produce from 'immer';

import { ErrorAction } from './actions';
import { ErrorActionTypeEnum } from './actionTypes';
import { INetworkError } from './types';

const initialState: INetworkError = {
  code: null,
  type: null,
};

const reducer = produce((state: INetworkError = initialState, action: ErrorAction): INetworkError => {
  switch (action.type) {
    case ErrorActionTypeEnum.API_ERROR_SET:
      state = action.payload;
      return state;
    case ErrorActionTypeEnum.API_ERROR_CLEAR:
      state.code = null;
      state.type = null;
      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
