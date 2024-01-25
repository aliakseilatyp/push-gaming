import JackpotsTable from 'components/JackpotsTable';
import Button from '@mui/material/Button';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import { CreateButtonWrapper } from './styles';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });

  return (
    <div>
      <h1>Jackpots</h1>
      <CreateButtonWrapper direction="row" justifyContent="right">
        <Button variant="contained" size="large">
          Create Jackpot
        </Button>
      </CreateButtonWrapper>
      <JackpotsTable />
      <PaginationTable
        pageCount={10}
        page={page}
        pageSize={pageSize}
        handleChangePage={handleChangePage}
        handlePageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Jackpots;
