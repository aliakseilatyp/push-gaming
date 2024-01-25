import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

export interface usePaginationInterface {
  initialPage: number;
  initialPageSize: number;
}

const usePagination = ({ initialPage, initialPageSize }: usePaginationInterface) => {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handlePageSizeChange = (event: SelectChangeEvent) => {
    setPageSize(Number.parseInt(event.target.value));
  };

  return { page, pageSize, handleChangePage, handlePageSizeChange };
};

export default usePagination;
