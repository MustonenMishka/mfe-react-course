import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import './App.css';
import { ITodo } from './types';
import Spinner from './components/Spinner/Spinner';
import TodoList from './components/TodoList/TodoList';
import { toggleAddTodoModal } from './globalStoreUtils';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const getTodosResponse: AxiosResponse<ITodo[]> = await axios.get('http://localhost:5000/todos');
        setTodos(getTodosResponse.data);
      } catch (e) {
        console.log('Error fetching todos', e);
      }
      setIsLoading(false);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    toggleAddTodoModal(true);
  };

  return (
    <div className="TodoListMFEWrapper">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TodoList todos={todos} />
          <button className="AddTodoBtn" onClick={handleAddTodo}>
            Add Todo
          </button>
        </>
      )}
    </div>
  );
};

export default App;
