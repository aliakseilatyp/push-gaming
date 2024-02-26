import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MenuItem, Stack } from '@mui/material';
import JackpotTierInstanceTable from 'components/JackpotTierInstanceTable';
import MultipleSelect from 'components/MultipleSelect';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import useStatus from 'hooks/useStatus';
import { Input } from 'layouts/Input';
import { jackpotTierInstanceData } from 'mockData/JackpotTierInstanceMockData';
import { StatusJackpotTierInstanceColor } from 'types/JackpotTierInstanceInterface';

const JackpotTierInstance = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '', instanceId: '', tierId: '' });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);
  const { status, handleChangeStatus, handleDeleteStatus } = useStatus([]);
  const content = jackpotTierInstanceData;

  return (
    <>
      <h1>Jackpot tier instance</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <MultipleSelect status={status} handleChangeStatus={handleChangeStatus} handleDeleteStatus={handleDeleteStatus}>
          {Object.keys(StatusJackpotTierInstanceColor).map((name) => (
            <MenuItem key={name} value={name} style={{ whiteSpace: 'normal' }}>
              {name}
            </MenuItem>
          ))}
        </MultipleSelect>
        <Input
          label="Instance ID"
          value={params.instanceId ?? ''}
          onChange={(e) => {
            setSearchParams({ ...params, instanceId: e.target.value });
          }}
          size="small"
        />
        <Input
          label="Jackpot ID"
          value={params.jackpotId ?? ''}
          onChange={(e) => {
            setSearchParams({ ...params, jackpotId: e.target.value });
          }}
          size="small"
        />
        <Input
          label="Tier ID"
          value={params.tierId ?? ''}
          onChange={(e) => {
            setSearchParams({ ...params, tierId: e.target.value });
          }}
          size="small"
        />
      </Stack>
      <JackpotTierInstanceTable content={content} />
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

export default JackpotTierInstance;
