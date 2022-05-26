import { RootState } from './reducers';

export const getIsModalOpen = (state: RootState) => state.modal.isOpen;
export const getAddTodoStatus = (state: RootState) => state.api.addTodoStatus;
