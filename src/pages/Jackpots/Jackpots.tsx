import { useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import JackpotsTable from 'components/JackpotsTable';
import PaginationTable from 'components/Pagination';
import MultipleSelect from 'components/MultipleSelect';
import usePagination from 'hooks/usePagination';
import useStatus from 'hooks/useStatus';
import { StatusJackpotsColor } from 'types';
import { jackpotData } from 'mockData/JackpotsMockData';
import { Input } from 'layouts/Input';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '' });
  const { jackpotId } = Object.fromEntries(searchParams.entries());
  const { status, handleChangeStatus, handleDeleteStatus } = useStatus(['NEW', 'ACTIVE']);
  const content = jackpotData;

  return (
    <>
      <h1>Jackpots</h1>
      <Stack direction="row" justifyContent="right" alignItems="center" spacing={2} margin="10px 0">
        <MultipleSelect status={status} handleChangeStatus={handleChangeStatus} handleDeleteStatus={handleDeleteStatus}>
          {Object.keys(StatusJackpotsColor).map((name) => (
            <MenuItem key={name} value={name} style={{ whiteSpace: 'normal' }}>
              {name}
            </MenuItem>
          ))}
        </MultipleSelect>
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
        <Button variant="contained" size="large">
          Create Jackpot
        </Button>
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
