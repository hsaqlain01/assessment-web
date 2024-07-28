export interface PaginationProps {
  data: IPagination;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPagination {
  totalPages: number;
  currentRecords: number;
  limit: number;
  totalRecords: number;
  page: number;
}
