import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, MenuItem, Stack } from '@mui/material';
import JackpotsTable from 'components/JackpotsTable';
import PaginationTable from 'components/Pagination';
import MultipleSelect from 'components/MultipleSelect';
import usePagination from 'hooks/usePagination';
import useStatus from 'hooks/useStatus';
import { StatusJackpotsColor } from 'types';
import { jackpotData } from 'mockData/JackpotsMockData';
import { Input } from 'layouts/Input';
import routes from 'constants/routes';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams({ jackpotId: '' });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);
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
          value={params.jackpotId}
          onChange={(e) => {
            setSearchParams({ ...params, jackpotId: e.target.value });
          }}
          size="small"
        />
        <Link to={routes.createJackpot}>
          <Button variant="contained" size="large">
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
