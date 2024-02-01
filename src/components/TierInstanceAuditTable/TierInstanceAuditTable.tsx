import { Link } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import TableHeadComponent from 'components/TableHeadComponent';
import routes from 'constants/routes';
import { DATE_FORMAT } from 'constants/constants';
import { ContentTierInstance } from 'types/TierInstanceInterface';

interface JackpotAuditTable {
  content: ContentTierInstance[];
}

const JACKPOT_AUDIT_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Instance ID' },
  { label: 'Revision date' },
  { label: 'User ID' },
  { label: 'View details' },
];

const TierInstanceAuditTable = ({ content }: JackpotAuditTable) => {
  return (
    <Paper>
      <TableContainerStyled>
        <TableStyled stickyHeader>
          <TableHeadComponent headerTableItems={JACKPOT_AUDIT_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ entity, metadata }) => (
              <TableRow key={entity.jackpotId}>
                <TableCell align="center">{entity.jackpotId}</TableCell>
                <TableCell align="center">{entity.instanceId}</TableCell>
                <TableCell align="center">{dayjs(metadata.delegate.revisionDate).format(DATE_FORMAT)}</TableCell>
                <TableCell align="center">{metadata.delegate.id}</TableCell>
                <TableCell align="center">
                  <Link to={`${routes.jackpotTierInstanceAudit}/${entity.jackpotId}`}>
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

export default TierInstanceAuditTable;
