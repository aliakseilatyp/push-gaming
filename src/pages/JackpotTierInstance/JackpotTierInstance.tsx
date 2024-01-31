import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import InputSearch from 'components/InputSearch';
import JackpotTierInstanceTable from 'components/JackpotTierInstanceTable';
import MultipleSelect from 'components/MultipleSelect';
import PaginationTable from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import useSearchValue from 'hooks/useSearchValue';
import useStatus from 'hooks/useStatus';
import { JackpotTierInstanceData } from 'mockData/JackpotTierInstanceMockData';
import { StatusJackpotTierInstanceColor } from 'types/JackpotTierInstanceInterface';

const JackpotTierInstance = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });
  const { status, handleChangeStatus, handleDeleteStatus } = useStatus([]);
  const [instanceId, handleInstanceId] = useSearchValue();
  const [jackpotId, handleJackpotId] = useSearchValue();
  const [tierId, handleTierId] = useSearchValue();
  const content = JackpotTierInstanceData;

  return (
    <>
      <h1>Jackpot Tier Instance</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <MultipleSelect status={status} handleChangeStatus={handleChangeStatus} handleDeleteStatus={handleDeleteStatus}>
          {Object.keys(StatusJackpotTierInstanceColor).map((name) => (
            <MenuItem key={name} value={name} style={{ whiteSpace: 'normal' }}>
              {name}
            </MenuItem>
          ))}
        </MultipleSelect>
        <InputSearch label="Instance ID" value={instanceId} onChange={handleInstanceId} />
        <InputSearch label="Jackpot ID" value={jackpotId} onChange={handleJackpotId} />
        <InputSearch label="Tier ID" value={tierId} onChange={handleTierId} />
      </Stack>
      <JackpotTierInstanceTable content={content} />
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

export default JackpotTierInstance;
