import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PaginationTableWrapper } from './styles';

interface IPaginationTable {
  pageCount: number;
  page: number;
  pageSize: Number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  handlePageSizeChange: (event: SelectChangeEvent) => void;
}

const PaginationTable = ({ pageCount, page, pageSize, handleChangePage, handlePageSizeChange }: IPaginationTable) => {
  return (
    <PaginationTableWrapper direction="row" justifyContent="right" alignItems="center" spacing={2}>
      <div>Rows per page:</div>
      <Select
        labelId="select-helper-label"
        id="select-helper"
        value={`${pageSize}`}
        defaultValue={'20'}
        onChange={handlePageSizeChange}
        size="small"
      >
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={40}>40</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
      <Pagination count={pageCount} page={page} onChange={handleChangePage} />
    </PaginationTableWrapper>
  );
};
export default PaginationTable;
