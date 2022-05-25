import { createStore } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { ActionTypeEnum } from './actionTypes';

export const store = createStore(reducers, composeWithDevTools());

const globalStore = GlobalStore.Get();
globalStore.RegisterStore('AddTodoMFE', store, [ActionTypeEnum.TOGGLE_MODAL_OPEN]);
