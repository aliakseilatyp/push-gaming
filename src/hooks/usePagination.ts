import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';


export interface usePaginationInterface {
  initialPage: number;
  initialPageSize: number;
}

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1', pageSize: '20' });
  const { page, pageSize } = Object.fromEntries(searchParams.entries());

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((params) => {
      params.set('page', value.toString());
      return params;
    });
  };
  const handlePageSizeChange = (event: SelectChangeEvent) => {
    setSearchParams((params) => {
      params.set('pageSize', event.target.value);
      return params;
    });
  };

  return {
    page,
    pageSize,
    handleChangePage,
    handlePageSizeChange,
  };
};

export default usePagination;
