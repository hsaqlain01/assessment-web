export interface IGetAllTodos {
  pagination: IPagination;
  data: ITodo[];
}

export interface IPagination {
  totalRecords: number;
  page: number;
  limit: number;
  totalPages: number;
  currentRecords: number;
}

export interface ITodo {
  createdAt: string;
  id: number;
  title: string;
  description: string;
  completed: number;
  user: IUser;
}

export interface IUser {
  id: number;
  username: string;
}
