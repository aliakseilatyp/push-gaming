import { styled } from 'styled-components';
import TableCell from '@mui/material/TableCell';


type Cell = {
  $open?: boolean;
  $enabled?: boolean;
};

export const TableCustomCell = styled(TableCell)<Cell>`
  && {
    padding: ${({ $open }) => ($open ? '16px' : '0px')};
    color: ${({ $enabled }) => ($enabled ? 'green' : 'red')};
`;
