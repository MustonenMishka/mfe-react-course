import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './state';

class TodoListMFE extends HTMLElement {
  private root: ReactDOM.Root;

  constructor() {
    super();
    this.root = ReactDOM.createRoot(this);
  }

  connectedCallback() {
    this.root.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('todo-list', TodoListMFE);
