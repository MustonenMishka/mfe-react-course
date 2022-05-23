import React from 'react';

import './TodoList.css';
import { ITodo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  if (!todos || !todos.length) return <h3 className="TodosCounter">No todos exist, please add one.</h3>;
  return (
    <div className="TodoListMFEWrapper">
      <h3 className="TodosCounter">Todos count: {todos.length}</h3>
      <ul className="TodoList">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
