import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createRouterReducer, createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import { globalStore } from '../globalStoreUtils';
import { GlobalStore } from 'redux-micro-frontend';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: createRouterReducer(history),
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(createRouterMiddleware(history))));
globalStore.RegisterStore('Container', store, [GlobalStore.AllowAll]);
