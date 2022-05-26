import React, { useEffect } from 'react';

import './App.css';
import { RequestStatusEnum } from './types';
import Spinner from './components/Spinner/Spinner';
import TodoList from './components/TodoList/TodoList';
import { fetchTodos, toggleAddTodoModal } from './globalStoreUtils';
import { useTypedSelector } from './state';
import { getApiState } from './state/selectors';

const App: React.FC = () => {
  const { todos, getTodosStatus } = useTypedSelector(getApiState);

  const isLoading: boolean = getTodosStatus === RequestStatusEnum.LOADING;

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    toggleAddTodoModal(true);
  };

  return (
    <div className="TodoListMFEWrapper">
      {isLoading ? (
        <Spinner />
      ) : todos ? (
        <>
          <TodoList todos={todos} />
          <button className="AddTodoBtn" onClick={handleAddTodo}>
            Add Todo
          </button>
        </>
      ) : null}
    </div>
  );
};

export default App;
