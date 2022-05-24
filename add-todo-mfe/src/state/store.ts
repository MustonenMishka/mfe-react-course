import { createStore } from 'redux';
import { GlobalStore } from 'redux-micro-frontend';

import { reducers } from './reducers';
import { ActionTypeEnum } from './actionTypes';

export const store = createStore(reducers);

const globalStore = GlobalStore.Get();
globalStore.RegisterStore('AddTodoMFE', store, [ActionTypeEnum.TOGGLE_MODAL_OPEN]);
