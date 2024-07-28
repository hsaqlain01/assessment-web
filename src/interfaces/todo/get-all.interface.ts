export interface IGetAllTodos {
  pagination: IPagination;
  data: ITodosListing[];
}

export interface IPagination {
  totalRecords: number;
  page: number;
  limit: number;
  totalPages: number;
  currentRecords: number;
}

export interface ITodosListing {
  createdAt: string;
  id: number;
  title: string;
  description: string;
  completed: number;
  user: ILsitingUser;
}

export interface ILsitingUser {
  id: number;
  username: string;
}
