import React, { useState } from 'react';

import './App.css';
import { ITodo } from './types';
import TodoItem from './components/TodoItem/TodoItem';
import Spinner from './components/Spinner/Spinner';

const MOCK: ITodo[] = [
  {
    id: '1',
    ts: 1653304363000,
    title: 'Buy cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    id: '2',
    ts: 1653304558000,
    title: 'Slice salami',
    desc: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
  {
    id: '3',
    ts: 1653304570000,
    title: 'Cook pizza',
    desc: 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(MOCK);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="TodoListMFEWrapper">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="TodoListWrapper">
          <h3 className="TodosCounter">Todos count: {todos.length}</h3>
          <ul className="TodoList">
            {todos.map(todo => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
