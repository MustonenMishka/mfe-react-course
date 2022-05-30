import { GlobalStore } from 'redux-micro-frontend';

export const globalStore = GlobalStore.Get();

export const toggleAddTodoModal = (isOpen: boolean) => {
  globalStore.DispatchGlobalAction('TodoListMFE', {
    type: 'ADD_TODO/TOGGLE_MODAL_OPEN',
    payload: isOpen,
  });
};

export const fetchTodos = () => {
  globalStore.DispatchGlobalAction('TodoListMFE', {
    type: 'API/TODOS/GET',
    payload: null,
  });
};

export const deleteTodo = (id: string) => {
  globalStore.DispatchGlobalAction('TodoListMFE', {
    type: 'API/TODOS/DELETE',
    payload: id,
  });
};
