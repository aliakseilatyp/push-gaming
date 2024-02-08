import dayjs from 'dayjs';
import { Button, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { ContentJackpotTierInstance } from 'types/JackpotTierInstanceInterface';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import { statusColors } from 'constants/colors';
import { DATE_FORMAT, JACKPOT_TIER_INSTANCE_HEADER_TABLE_ROW } from 'constants/constants';

interface IJackpotTierInstanceTable {
  content: ContentJackpotTierInstance[];
}

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
                  <Link to={`${routes.jackpots}?jackpotId=${jackpotId}`}>
                    <Button>View Jackpot</Button>
                  </Link>
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
