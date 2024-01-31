import { styled } from 'styled-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const DetailedList = styled.ul`
  padding-left: 15px;
  margin: 0 0 5px 0;
`;

export const TableTitle = styled.h3`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 500;
`;

type Cell = {
  $open?: boolean;
  $enabled?: boolean;
};

export const TableCustomRow = styled(TableRow)`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:nth-last-child(1) {
    border-bottom: 0;
  }
`;

export const TableCustomCell = styled(TableCell)<Cell>`
  && {
    padding: ${({ $open }) => ($open ? '16px' : '0px')};
    color: ${({ $enabled }) => ($enabled ? 'green' : 'red')};
`;
