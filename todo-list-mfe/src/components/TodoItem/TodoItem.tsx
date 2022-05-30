import React from 'react';

import './TodoItem.css';
import { ITodo } from '../../types';
import { deleteTodo } from '../../globalStoreUtils';

const TodoItem: React.FC<ITodo> = ({ ts, title, desc, id }) => {
  const date: Date = new Date(ts);
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const isoDateString = date.toISOString();
  const readableDateString = date.toLocaleDateString('en-Us', dateFormatOptions);

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="TodoItemWrapper">
      <div className="TodoHeader">
        <h5 className="TodoTitle">{title}</h5>
        <time className="TodoDate" dateTime={isoDateString}>
          {readableDateString}
        </time>
      </div>
      <p className="TodoDesc">{desc}</p>
      <button className="DeleteItemBtn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
