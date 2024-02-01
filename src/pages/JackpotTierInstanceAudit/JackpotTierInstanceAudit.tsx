import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import PaginationTable from 'components/Pagination';
import TierInstanceAuditTable from 'components/TierInstanceAuditTable';
import usePagination from 'hooks/usePagination';
import { Input } from 'layouts/Input';
import { tierInstanceAuditMockData } from 'mockData/TierInstanceAuditMockData';


const JackpotTierInstanceAudit = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '', instanceId: '' });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

  const content = tierInstanceAuditMockData;
  return (
    <>
      <h1>Jackpot tier instance audit</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <Input
          label="Instance ID"
          value={params.instanceId}
          onChange={(e) => {
            setSearchParams({ ...params, instanceId: e.target.value });
          }}
          size="small"
        />
        <Input
          label="Jackpot ID"
          value={params.jackpotId}
          onChange={(e) => {
            setSearchParams({ ...params, jackpotId: e.target.value });
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
