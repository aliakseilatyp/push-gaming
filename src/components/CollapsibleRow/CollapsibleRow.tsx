import { ReactNode, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCollapsibleRow } from './styled';

interface ICollapsibleRow {
  renderRow: (open: boolean) => ReactNode;
  renderCollapse: (open: boolean) => ReactNode;
}

const CollapsibleRow = ({ renderRow, renderCollapse }: ICollapsibleRow) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableCollapsibleRow
        onClick={handleClick}
      >
        {renderRow(open)}
      </TableCollapsibleRow>
      <TableRow>
        {renderCollapse(open)}
      </TableRow>
    </>
  );
};

export default CollapsibleRow;
