import Stack from '@mui/material/Stack';
import PaginationTable from 'components/Pagination';
import TierInstanceAuditTable from 'components/TierInstanceAuditTable';
import usePagination from 'hooks/usePagination';
import { Input } from 'layouts/Input';
import { tierInstanceAuditMockData } from 'mockData/TierInstanceAuditMockData';
import { useSearchParams } from 'react-router-dom';

const JackpotTierInstanceAudit = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '', instanceId: '' });
  const { jackpotId, instanceId } = Object.fromEntries(searchParams.entries());

  const content = tierInstanceAuditMockData;
  return (
    <>
      <h1>Jackpot tier instance audit</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <Input
          label="Instance ID"
          value={instanceId}
          onChange={(e) => {
            setSearchParams((params) => {
              params.set('instanceId', e.target.value);
              return params;
            });
          }}
          size="small"
        />
        <Input
          label="Jackpot ID"
          value={jackpotId}
          onChange={(e) => {
            setSearchParams((params) => {
              params.set('jackpotId', e.target.value);
              return params;
            });
          }}
          size="small"
        />
      </Stack>
      <TierInstanceAuditTable content={content} />
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

export default JackpotTierInstanceAudit;
