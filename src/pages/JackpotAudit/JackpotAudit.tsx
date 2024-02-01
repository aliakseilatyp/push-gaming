import Stack from '@mui/material/Stack';
import InputSearch from 'components/InputSearch';
import JackpotAuditTable from 'components/JackpotAuditTable';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import useSearchValue from 'hooks/useSearchValue';
import { jackpotAuditData } from 'mockData/JackpotAuditMockData';

const JackpotAudit = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });
  const [jackpotId, handleJackpotId] = useSearchValue();
  const content = jackpotAuditData;
  return (
    <>
      <h1>Jackpot audit</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <InputSearch label="Jackpot ID" value={jackpotId} onChange={handleJackpotId} />
      </Stack>
      <JackpotAuditTable content={content} />
      <PaginationTable
        pageCount={10}
        page={page}
        pageSize={pageSize}
        handleChangePage={handleChangePage}
        handlePageSizeChange={handlePageSizeChange}
      />
    </>
  );
};

export default JackpotAudit;
