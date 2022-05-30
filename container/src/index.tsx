import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReduxRouter } from '@lagunovsky/redux-react-router';

import './index.css';
import App from './App';
import { history, store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ReduxRouter history={history}>
    <App />
    </ReduxRouter>
  </Provider>,
);
