import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './state';

class AddTodoMFE extends HTMLElement {
  private root: ReactDOM.Root;

  constructor() {
    super();
    this.root = ReactDOM.createRoot(this);
  }

  connectedCallback() {
    this.root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('add-todo', AddTodoMFE);