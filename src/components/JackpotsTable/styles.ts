import { styled } from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

export const TableContainerStyled = styled(TableContainer)`
  max-height: calc(100vh - 241px);
`;

export const TableRowCell = styled(TableCell)`
  && {
    padding: 8px;
    font-size: 14px;
  }
`;
