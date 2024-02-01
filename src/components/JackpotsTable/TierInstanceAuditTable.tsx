import { Link } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import ActionMenu from 'components/ActionMenu';
import routes from 'constants/routes';
import { ContentJackpots } from 'types';
import { TableContainerStyled, TableStyled } from 'layouts/Table/Table';
import { statusColors } from 'constants/colors';
import { DATE_FORMAT } from 'constants/constants';

const JACKPOTS_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'Config schema ID' },
  { label: 'Tier instance config schema ID' },
  { label: 'View details' },
  { label: 'Action' },
  { label: 'Audit Trail ID' },
  { label: 'View Instances' },
];

interface IJackpotsTable {
  content: ContentJackpots[];
}

const JackpotsTable = ({ content }: IJackpotsTable) => {
  return (
    <Paper>
      <TableContainerStyled>
        <TableStyled stickyHeader>
          <TableHeadComponent headerTableItems={JACKPOTS_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ jackpotId, status, createdAt, modifiedAt, configSchemaId, tierInstanceConfigSchemaId }) => (
              <TableRow key={jackpotId}>
                <TableCell align="center">{jackpotId}</TableCell>
                <TableCell align="center" style={{ color: statusColors[status] }}>
                  {status}
                </TableCell>
                <TableCell align="center">{dayjs(createdAt).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{dayjs(modifiedAt).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{configSchemaId}</TableCell>
                <TableCell align="center">{tierInstanceConfigSchemaId}</TableCell>
                <TableCell align="center">
                  <Link to={`${routes.jackpots}/${jackpotId}`}>
                    <Button>View details</Button>
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
        </TableStyled>
      </TableContainerStyled>
    </Paper>
  );
};
export default JackpotsTable;
