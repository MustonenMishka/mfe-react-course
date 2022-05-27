import React, { ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-modal';

import './App.css';
import { IAddTodoFormData, RequestStatusEnum } from './types';
import { useActions, useTypedSelector } from './state';
import { getAddTodoStatus, getIsModalOpen } from './state/selectors';
import { addTodo, clearAddTodoStatus } from './globalStoreUtils';
import Spinner from './components/Spinner/Spinner';

const App: React.FC = () => {
  const isModalOpen = useTypedSelector(getIsModalOpen);
  const { toggleModalOpenAC } = useActions();

  const [titleValue, setTitleValue] = useState<string>('');
  const [descValue, setDescValue] = useState<string>('');

  const addTodoStatus = useTypedSelector(getAddTodoStatus);
  const isLoading: boolean = addTodoStatus === RequestStatusEnum.LOADING;

  const handleCloseModal = () => {
    setTitleValue('');
    setDescValue('');
    clearAddTodoStatus();
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

    const addTodoFormData: IAddTodoFormData = {
      title: titleValue,
      desc: descValue,
    };
    addTodo(addTodoFormData);
  };

  if (addTodoStatus === RequestStatusEnum.ACCEPTED || addTodoStatus === RequestStatusEnum.DENIED) {
    handleCloseModal();
  }

  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} className="AddTodoModal" ariaHideApp={false}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </Modal>
  );
};

export default App;
