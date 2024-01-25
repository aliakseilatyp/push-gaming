import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
          <TableCell align="center" key={label}>
            {label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
