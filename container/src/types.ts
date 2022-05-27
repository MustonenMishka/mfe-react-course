interface ITodo {
  id: string;
  title: string;
  desc: string;
  ts: number;
}

enum RequestStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

interface ITodosApiState {
  todos: ITodo[] | null;
  getTodosStatus: RequestStatusEnum | null;
  addTodoStatus: RequestStatusEnum | null;
}

export interface INetworkError {
  code: number | null;
  type: string | null;
}

export interface IApiState {
  Todos: ITodosApiState;
  Error: INetworkError;
}
