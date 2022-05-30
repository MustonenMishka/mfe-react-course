import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CALL_HISTORY_METHOD, createReduxHistoryContext, LOCATION_CHANGE } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import { globalStore } from '../globalStoreUtils';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
export const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(routerMiddleware)),
);
export const history = createReduxHistory(store);

globalStore.RegisterStore('Container', store, [LOCATION_CHANGE, CALL_HISTORY_METHOD]);
