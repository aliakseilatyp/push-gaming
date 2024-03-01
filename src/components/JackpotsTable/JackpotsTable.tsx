import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import ActionMenu from 'components/ActionMenu';
import { Button, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import routes from 'constants/routes';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import { statusColors } from 'constants/colors';
import { DATE_FORMAT, JACKPOTS_HEADER_TABLE_ROW } from 'constants/constants';
import { ContentJackpots } from 'types/JackpotsInterface';

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
            {content.map(({ jackpotId, status, createdAt, modifiedAt }) => (
              <TableRow key={jackpotId}>
                <TableCell align="center">
                  <Link to={`${routes.jackpots}/${jackpotId}`}>
                    <Button style={{ color: '#264274' }}>{jackpotId}</Button>
                  </Link>
                </TableCell>
                <TableCell align="center" style={{ color: statusColors[status] }}>
                  {status}
                </TableCell>
                <TableCell align="center">{dayjs(createdAt).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{dayjs(modifiedAt).format(DATE_FORMAT)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
    </Paper>
  );
};
export default JackpotsTable;
