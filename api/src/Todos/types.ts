export interface IAddTodoFormData {
  title: string;
  desc: string;
}

export interface ITodo extends IAddTodoFormData {
  id: string;
  ts: number;
}
