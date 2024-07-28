import { IPagination } from './pagination.interface';

export interface IPaginationButtons {
  data: IPagination;
  handlePageChange: (val: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
