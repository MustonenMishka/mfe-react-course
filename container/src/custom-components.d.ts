import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'todo-list': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'add-todo': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
