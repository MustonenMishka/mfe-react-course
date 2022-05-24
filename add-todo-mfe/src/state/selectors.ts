import { RootState } from './reducers';

export const getIsModalOpen = (state: RootState) => state.modal.isOpen;
