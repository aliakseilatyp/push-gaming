import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import JackpotsTable from 'components/JackpotsTable';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import routes from 'constants/routes';
import { JackpotsMockData } from 'mockData/JackpotsMockData';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const { content } = JackpotsMockData;

  return (
    <>
      <h1>Jackpots</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <Link to={routes.createJackpot}>
          <Button variant="contained" size="large" style={{ backgroundColor: '#264274' }}>
            Create Jackpot
          </Button>
        </Link>
      </Stack>
      <JackpotsTable content={content} />
      <PaginationTable
        pageCount={10}
        page={parseInt(page)}
        pageSize={parseInt(pageSize)}
        handleChangePage={handleChangePage}
        handlePageSizeChange={handlePageSizeChange}
      />
    </>
  );
};

export default Jackpots;
