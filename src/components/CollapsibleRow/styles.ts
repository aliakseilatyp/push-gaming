import { TableRow } from '@mui/material';
import { styled } from 'styled-components';

export const TableCollapsibleRow = styled(TableRow)`
  && td {
    border: 0;
  }
  cursor: pointer;
`;


export const TableCustomRow = styled(TableRow)`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:nth-last-child(1) {
    border-bottom: 0;
  }
`;
