import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import { ContentTierInstance } from 'types/TierInstanceInterface';
import { TableContainerStyled, TableStyled } from 'layouts/Table';
import TableHeadComponent from 'components/TableHeadComponent';
import routes from 'constants/routes';
import { DATE_FORMAT, TIER_AUDIT_HEADER_TABLE_ROW } from 'constants/constants';

interface JackpotAuditTable {
  content: ContentTierInstance[];
}


const TierInstanceAuditTable = ({ content }: JackpotAuditTable) => {
  return (
    <Paper>
      <TableContainerStyled>
        <TableStyled stickyHeader>
          <TableHeadComponent headerTableItems={TIER_AUDIT_HEADER_TABLE_ROW} />
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
