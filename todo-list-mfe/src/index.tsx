import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

class TodoListMFE extends HTMLElement {
  private root: ReactDOM.Root;

  constructor() {
    super();
    this.root = ReactDOM.createRoot(this);
  }

  connectedCallback() {
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define('todo-list', TodoListMFE);
