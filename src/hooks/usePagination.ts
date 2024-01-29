import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
// import { useSearchParams } from 'react-router-dom';

export interface usePaginationInterface {
  initialPage: number;
  initialPageSize: number;
}

const usePagination = ({ initialPage, initialPageSize }: usePaginationInterface) => {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  //TODO: replace useState with useSearchParams
  // const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ page: value });
  // console.log('searchParams', Object.fromEntries(searchParams.entries()));
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handlePageSizeChange = (event: SelectChangeEvent) => {
    setPageSize(Number.parseInt(event.target.value));
  };

  return { page, pageSize, handleChangePage, handlePageSizeChange };
};

export default usePagination;
