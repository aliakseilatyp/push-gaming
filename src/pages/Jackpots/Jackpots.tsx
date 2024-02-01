import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import JackpotsTable from 'components/JackpotsTable';
import PaginationTable from 'components/Pagination';
import MultipleSelect from 'components/MultipleSelect';
import InputSearch from 'components/InputSearch';
import usePagination from 'hooks/usePagination';
import useSearchValue from 'hooks/useSearchValue';
import useStatus from 'hooks/useStatus';
import { StatusJackpotsColor } from 'types';
import { jackpotData } from 'mockData/JackpotsMockData';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });
  const [searchValue, searchHandler] = useSearchValue();
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
        <InputSearch label="Jackpot ID" value={searchValue} onChange={searchHandler} />
        <Button variant="contained" size="large">
          Create Jackpot
        </Button>
      </Stack>
      <JackpotsTable content={content} />
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

export default Jackpots;
