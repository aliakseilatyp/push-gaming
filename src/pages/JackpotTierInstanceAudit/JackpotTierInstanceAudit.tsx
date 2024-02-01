import Stack from '@mui/material/Stack';
import InputSearch from 'components/InputSearch';
import PaginationTable from 'components/Pagination';
import TierInstanceAuditTable from 'components/TierInstanceAuditTable';
import usePagination from 'hooks/usePagination';
import useSearchValue from 'hooks/useSearchValue';
import { tierInstanceAuditMockData } from 'mockData/TierInstanceAuditMockData';

const JackpotTierInstanceAudit = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });
  const [jackpotId, handleJackpotId] = useSearchValue();
  const [instanceId, handleInstanceId] = useSearchValue();
  const content = tierInstanceAuditMockData;
  return (
    <>
      <h1>Jackpot tier instance audit</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <InputSearch label="Instance ID" value={instanceId} onChange={handleInstanceId} />
        <InputSearch label="Jackpot ID" value={jackpotId} onChange={handleJackpotId} />
      </Stack>
      <TierInstanceAuditTable content={content} />
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

export default JackpotTierInstanceAudit;
