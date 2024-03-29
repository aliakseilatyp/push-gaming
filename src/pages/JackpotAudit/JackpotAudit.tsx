import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import JackpotAuditTable from 'components/JackpotAuditTable';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import { Input } from 'layouts/Input';
import { jackpotAuditData } from 'mockData/JackpotAuditMockData';

const JackpotAudit = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '' });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);
  const content = jackpotAuditData;
  return (
    <>
      <h1>Jackpot audit</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <Input
          label="Jackpot ID"
          value={params.jackpotId}
          onChange={(e) => {
            setSearchParams({ ...params, jackpotId: e.target.value });
          }}
          size="small"
        />
      </Stack>
      <JackpotAuditTable content={content} />
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

export default JackpotAudit;
