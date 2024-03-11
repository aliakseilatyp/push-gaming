import { useParams } from 'react-router-dom';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { TableTitle } from 'layouts/Table';
import { DATE_FORMAT, TIERS_HEADER_TABLE_ROW } from 'constants/constants';
import { JackpotMockData } from 'mockData/JackpotMockData';
import JackpotTabs from 'components/JackpotTabs';
import { SummaryWrapper } from './styles';
import dayjs from 'dayjs';
import { SelectForm } from 'layouts/Form';
import { statusColors } from 'constants/colors';
import { useContext } from 'react';
import { KeycloackContext } from 'context/KeyckoakContext';
import { ROLES } from 'constants/roles';

const JackpotDetails = () => {
  const { id } = useParams();
  const jackpot = JackpotMockData;
  const { keycloackValue } = useContext(KeycloackContext);
  const isAdmin = keycloackValue?.realmAccess?.roles.includes(ROLES.admin);
  const isSuspendViewer = keycloackValue?.realmAccess?.roles.includes(ROLES.suspend);

  return (
    <Stack direction="column" spacing={5}>
      <SummaryWrapper>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <h2>Summary</h2>
            <Box marginBottom="5px">
              Jackpot ID: <strong>{jackpot?.jackpotId}</strong>
            </Box>
            <Box marginBottom="5px">
              Status:{' '}
              <strong>
                <span style={{ color: statusColors[jackpot?.status] }}>{jackpot?.status}</span>
              </strong>
            </Box>
          </Box>
          {jackpot?.status !== 'closed' && (isAdmin || isSuspendViewer) ? (
            <Box sx={{ minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="select-label" size="small">
                  Actions
                </InputLabel>
                <SelectForm
                  labelId="select-label"
                  id="simple-select"
                  value={''}
                  label="Actions"
                  onChange={() => {}}
                  size="small"
                >
                  {
                    {
                      active: <MenuItem value={'suspend'}>Suspend</MenuItem>,
                      suspended: !isSuspendViewer
                        ? [
                            { value: 'close', label: 'Close' },
                            { value: 'delete', label: 'Deleted' },
                          ].map(({ value, label }, i) => {
                            if (!jackpot?.tiers.length && value === 'delete') {
                              return null;
                            }
                            return (
                              <MenuItem value={value} key={i}>
                                {label}
                              </MenuItem>
                            );
                          })
                        : null,
                    }[jackpot?.status]
                  }
                </SelectForm>
              </FormControl>
            </Box>
          ) : null}
        </Stack>

        {!!jackpot?.tiers.length && (
          <>
            <TableTitle>Tiers</TableTitle>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHeadComponent headerTableItems={TIERS_HEADER_TABLE_ROW} />
                  <TableBody>
                    {jackpot?.tiers.map((tier) => {
                      return (
                        <TableRow key={tier.tierId}>
                          <TableCell align="center">{tier.tierId}</TableCell>
                          <TableCell align="center">{tier.tierInstanceId}</TableCell>
                          <TableCell align="center">{dayjs(tier.winBy).format(DATE_FORMAT)}</TableCell>
                          <TableCell align="center">$10000.00</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </>
        )}
      </SummaryWrapper>
      <JackpotTabs />
    </Stack>
  );
};

export default JackpotDetails;
