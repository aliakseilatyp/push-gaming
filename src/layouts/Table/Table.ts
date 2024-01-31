import { styled } from 'styled-components';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

type Cell = {
  $open?: boolean;
  $enabled?: boolean;
};

export const TableCustomCell = styled(TableCell)<Cell>`
  && {
    padding: ${({ $open }) => ($open ? '16px' : '0px')};
    color: ${({ $enabled }) => ($enabled ? 'green' : 'red')};
`;

export const TableContainerStyled = styled(TableContainer)`
  max-height: calc(100vh - 241px);
`;

export const TableStyled = styled(Table)`
  min-width: 650px;
`;

export const TableTitle = styled.h3`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 500;
`;
