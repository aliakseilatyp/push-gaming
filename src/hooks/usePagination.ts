import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { useMemo } from 'react';

export interface usePaginationInterface {
  initialPage: number;
  initialPageSize: number;
}

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1', pageSize: '20' });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...params, page: value.toString() });
  };
  const handlePageSizeChange = (event: SelectChangeEvent) => {
    setSearchParams({ ...params, pageSize: event.target.value });
  };

  return {
    page: params.page,
    pageSize: params.pageSize,
    handleChangePage,
    handlePageSizeChange,
  };
};

export default usePagination;
