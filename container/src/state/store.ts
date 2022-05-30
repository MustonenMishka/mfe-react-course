import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GlobalStore } from 'redux-micro-frontend';

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

globalStore.RegisterStore('Container', store, [GlobalStore.AllowAll]);
