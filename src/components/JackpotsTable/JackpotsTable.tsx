import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { JackpotsArray, getJackpots } from 'mockData/getJackpots';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import { StatusJackpotsColor } from 'types';
import { TableContainerStyled, TableRowCell } from './styles';
import  ActionMenu from 'components/ActionMenu';

const JACKPOTS_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'Config schema ID' },
  { label: 'Tier instance config schema ID' },
  { label: 'Detailed' },
  { label: 'Action' },
  { label: 'Audit Trail ID' },
  { label: 'View Instances' },
];

const JackpotsTable = () => {

  const content = JackpotsArray;

  return (
    <Paper>
      <TableContainerStyled>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadComponent headerTableItems={JACKPOTS_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ jackpotId, status, createdAt, modifiedAt, configSchemaId, tierInstanceConfigSchemaId }) => (
              <TableRow key={jackpotId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableRowCell align="center">{jackpotId}</TableRowCell>
                <TableRowCell align="center" style={{ color: StatusJackpotsColor[status] }}>
                  {status}
                </TableRowCell>
                <TableRowCell align="center">{dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss')}</TableRowCell>
                <TableRowCell align="center">{dayjs(modifiedAt).format('DD/MM/YYYY HH:mm:ss')}</TableRowCell>
                <TableRowCell align="center">{configSchemaId}</TableRowCell>
                <TableRowCell align="center">{tierInstanceConfigSchemaId}</TableRowCell>
                <TableRowCell align="center">
                  <Button>Detailed</Button>
                </TableRowCell>
                <TableRowCell align="center">
                  <ActionMenu>
                    <MenuItem>ACTIVATE</MenuItem>
                    <MenuItem>UPDATE</MenuItem>
                    <MenuItem>FINISH</MenuItem>
                    <MenuItem>SUSPEND</MenuItem>
                  </ActionMenu>
                </TableRowCell>
                <TableRowCell align="center">
                  <Button>Audit trail</Button>
                </TableRowCell>
                <TableRowCell align="center">
                  <Button>View Instances</Button>
                </TableRowCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </Paper>
  );
};
export default JackpotsTable;
