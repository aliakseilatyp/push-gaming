import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { JackpotsArray, getJackpots } from 'mockData/getJackpots';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import ActionMenu from 'components/ActionMenu';
import routes from 'constants/routes';
import { statusColor } from 'constants/colors';
import { TableContainerStyled } from './styles';

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
        <Table stickyHeader sx={{ minWidth: 650 }}>
          <TableHeadComponent headerTableItems={JACKPOTS_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ jackpotId, status, createdAt, modifiedAt, configSchemaId, tierInstanceConfigSchemaId }) => (
              <TableRow key={jackpotId}>
                <TableCell align="center">{jackpotId}</TableCell>
                <TableCell align="center" style={{ color: statusColor[status] }}>
                  {status}
                </TableCell>
                <TableCell align="center">{dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
                <TableCell align="center">{dayjs(modifiedAt).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
                <TableCell align="center">{configSchemaId}</TableCell>
                <TableCell align="center">{tierInstanceConfigSchemaId}</TableCell>
                <TableCell align="center">
                  <Link to={`${routes.jackpots}/${jackpotId}`}>
                    <Button>Detailed </Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <ActionMenu>
                    <MenuItem>ACTIVATE</MenuItem>
                    <MenuItem>UPDATE</MenuItem>
                    <MenuItem>FINISH</MenuItem>
                    <MenuItem>SUSPEND</MenuItem>
                  </ActionMenu>
                </TableCell>
                <TableCell align="center">
                  <Button>Audit trail</Button>
                </TableCell>
                <TableCell align="center">
                  <Button>View Instances</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </Paper>
  );
};
export default JackpotsTable;
