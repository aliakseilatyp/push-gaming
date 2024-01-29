import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import JackpotsTable from 'components/JackpotsTable';
import PaginationTable from 'components/Pagination';
import MultipleSelect from 'components/MultipleSelect';
import InputSearch from 'components/InputSearch';
import usePagination from 'hooks/usePagination';
import useSearchValue from 'hooks/useSearchValue';
import { StatusJackpotsColor } from 'types';
import useStatus from 'hooks/useStatus';
import { CreateButtonWrapper } from './styles';

const Jackpots = () => {
  const { page, pageSize, handleChangePage, handlePageSizeChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
  });
  const [searchValue, searchHandler] = useSearchValue();
  const { status, handleChangeStatus, handleDeleteStatus } = useStatus(['NEW', 'ACTIVE']);

  return (
    <div>
      <h1>Jackpots</h1>
      <CreateButtonWrapper direction="row" justifyContent="right" alignItems="center" spacing={2}>
        <MultipleSelect
          status={status}
          handleChangeStatus={handleChangeStatus}
          handleDeleteStatus={handleDeleteStatus}
        >
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
      </CreateButtonWrapper>
      <JackpotsTable />
      <PaginationTable
        pageCount={10}
        page={page}
        pageSize={pageSize}
        handleChangePage={handleChangePage}
        handlePageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Jackpots;
