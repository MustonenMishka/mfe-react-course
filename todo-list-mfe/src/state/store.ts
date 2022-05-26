import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { IApiState } from '../types';
import { setApiStateAC } from './actionCreators';
import { globalStore } from '../globalStoreUtils';

export const store = createStore(reducers, composeWithDevTools());

globalStore.SubscribeToPartnerState('TodoListMFE', 'API', (apiState: IApiState) => {
  if (apiState.Todos !== store.getState().api) {
    store.dispatch(setApiStateAC(apiState.Todos));
  }
});
