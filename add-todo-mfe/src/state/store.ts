import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { ActionTypeEnum } from './actionTypes';
import { IApiState } from '../types';
import { setApiStateAC } from './actionCreators';
import { globalStore } from '../globalStoreUtils';

export const store = createStore(reducers, composeWithDevTools());

globalStore.RegisterStore('AddTodoMFE', store, [ActionTypeEnum.TOGGLE_MODAL_OPEN]);

globalStore.SubscribeToPartnerState('AddTodoMFE', 'API', (apiState: IApiState) => {
  if (apiState.Todos !== store.getState().api) {
    store.dispatch(setApiStateAC(apiState.Todos));
  }
});
