export interface IAddTodoFormData {
  title: string;
  desc: string;
}
export interface ITodo extends IAddTodoFormData {
  id: string;
  ts: number;
}

export enum RequestStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export interface ITodosApiState {
  todos: ITodo[] | null;
  getTodosStatus: RequestStatusEnum | null;
  addTodoStatus: RequestStatusEnum | null;
}

export interface IApiState {
  Todos: ITodosApiState;
}
