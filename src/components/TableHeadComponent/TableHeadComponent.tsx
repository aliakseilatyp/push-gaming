import { TableHead, TableRow } from '@mui/material';
import { TableHeaderCell } from './styles';

interface ITableHeadComponent {
  headerTableItems: {
    label: string;
  }[];
}

const TableHeadComponent: React.FC<ITableHeadComponent> = ({ headerTableItems }) => {
  return (
    <TableHead>
      <TableRow>
        {headerTableItems.map(({ label }) => (
          <TableHeaderCell align="center" key={label}>
            {label}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
