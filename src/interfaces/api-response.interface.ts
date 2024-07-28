export interface IApiResponse<T> {
  status: number;
  result: boolean;
  message: string;
  data: T;
}
