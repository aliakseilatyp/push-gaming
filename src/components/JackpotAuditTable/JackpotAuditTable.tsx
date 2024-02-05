import { Link } from 'react-router-dom';
import { ContentJackpotAudit } from 'types/JackpotAuditInterface';
import dayjs from 'dayjs';
import { Button, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import TableHeadComponent from 'components/TableHeadComponent';
import routes from 'constants/routes';
import { DATE_FORMAT } from 'constants/constants';

interface JackpotAuditTable {
  content: ContentJackpotAudit[];
}

const JACKPOT_AUDIT_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Revision date' },
  { label: 'User ID' },
  { label: 'View details' },
];

const JackpotAuditTable = ({ content }: JackpotAuditTable) => {
  return (
    <Paper>
      <TableContainerStyled>
        <TableStyled stickyHeader>
          <TableHeadComponent headerTableItems={JACKPOT_AUDIT_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ entity, metadata }) => (
              <TableRow key={entity.jackpotId}>
                <TableCell align="center">{entity.jackpotId}</TableCell>
                <TableCell align="center">{dayjs(metadata.delegate.revisionDate).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{metadata.delegate.id}</TableCell>
                <TableCell align="center">
                  <Link to={`${routes.jackpotAudit}/${entity.jackpotId}`}>
                    <Button>View details</Button>
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

export default JackpotAuditTable;
