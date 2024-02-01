import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import { ContentJackpotTierInstance } from 'types/JackpotTierInstanceInterface';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import { statusColors } from 'constants/colors';
import { DATE_FORMAT } from 'constants/constants';

interface IJackpotTierInstanceTable {
  content: ContentJackpotTierInstance[];
}

const JACKPOT_TIER_INSTANCE_HEADER_TABLE_ROW = [
  { label: 'Instance ID' },
  { label: 'Jackpot ID' },
  { label: 'Tier ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'View details' },
  { label: 'View Jackpot' },
];

const JackpotTierInstanceTable = ({ content }: IJackpotTierInstanceTable) => {
  return (
    <Paper>
      <TableContainerStyled>
        <TableStyled stickyHeader>
          <TableHeadComponent headerTableItems={JACKPOT_TIER_INSTANCE_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ instanceId, jackpotId, tierId, status, createdAt, modifiedAt }) => (
              <TableRow key={jackpotId}>
                <TableCell align="center">{instanceId}</TableCell>
                <TableCell align="center">{jackpotId}</TableCell>
                <TableCell align="center">{tierId}</TableCell>
                <TableCell align="center" style={{ color: statusColors[status] }}>
                  {status}
                </TableCell>
                <TableCell align="center">{dayjs(createdAt).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{dayjs(modifiedAt).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">
                  <Link to={`${routes.jackpotTierInstance}/${instanceId}`}>
                    <Button>View details</Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Button>View Jackpot</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
    </Paper>
  );
};

export default JackpotTierInstanceTable;
