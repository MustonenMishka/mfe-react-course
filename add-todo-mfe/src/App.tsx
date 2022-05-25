import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import './App.css';
import { ITodo } from './types';
import { useActions, useTypedSelector } from './state';
import { getIsModalOpen } from './state/selectors';

const App: React.FC = () => {
  const isModalOpen = useTypedSelector(getIsModalOpen);
  const { toggleModalOpenAC } = useActions();

  const [titleValue, setTitleValue] = useState<string>('');
  const [descValue, setDescValue] = useState<string>('');

  const handleCloseModal = () => {
    setTitleValue('');
    setDescValue('');
    toggleModalOpenAC(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescValue(e.target.value);
  };

  const handleSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const todo: ITodo = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: titleValue,
        desc: descValue,
        ts: Date.now(),
      };
      await axios.post('http://localhost:5000/todos', todo);

      handleCloseModal();
    } catch (e) {
      console.log('Error adding todo', e);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} className="AddTodoModal" ariaHideApp={false}>
      <h4 className="ModalTitle">Let's add a new todo!</h4>
      <form className="AddTodoForm" onSubmit={handleSubmitTodo}>
        <input
          required
          className="InputField"
          placeholder="Title"
          type="text"
          value={titleValue}
          onChange={handleTitleChange}
        />
        <input
          required
          className="InputField"
          placeholder="Description"
          type="text"
          value={descValue}
          onChange={handleDescChange}
        />
        <button className="SubmitTodoBtn">Submit</button>
      </form>
    </Modal>
  );
};

export default App;
