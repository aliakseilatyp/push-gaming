import { useSearchParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
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
  const { jackpotId, instanceId, tierId } = Object.fromEntries(searchParams.entries());
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
        <Input
          label="Tier ID"
          value={tierId}
          onChange={(e) => {
            setSearchParams((params) => {
              params.set('tierId', e.target.value);
              return params;
            });
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
