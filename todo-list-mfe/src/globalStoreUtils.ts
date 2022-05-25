import { GlobalStore } from 'redux-micro-frontend';

const globalStore = GlobalStore.Get();

export const toggleAddTodoModal = (isOpen: boolean) => {
  globalStore.DispatchGlobalAction('TodoListMFE', {
    type: 'ADD_TODO/TOGGLE_MODAL_OPEN',
    payload: isOpen,
  });
};
