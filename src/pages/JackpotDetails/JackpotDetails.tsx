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

const JackpotDetails = () => {
  const { id } = useParams();
  const jackpot = JackpotMockData;

  return (
    <Stack direction="column" spacing={5}>
      <SummaryWrapper>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <h2>Summary</h2>
            <Box marginBottom="5px">
              Jackpot ID: <strong>{jackpot?.jackpotId}</strong>
            </Box>
            <Box marginBottom="5px" >
              Status: <strong><span style={{ color: statusColors[jackpot?.status] }}>{jackpot?.status}</span></strong>
            </Box>
          </Box>
          {jackpot?.status !== 'closed' && (
            <Box sx={{ minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="select-label" size='small'>Status</InputLabel>
                <SelectForm
                  labelId="select-label"
                  id="simple-select"
                  value={''}
                  label="Status"
                  onChange={() => {}}
                  size="small"
                >
                  {
                    {
                      active: <MenuItem value={'suspend'}>Suspend</MenuItem>,
                      suspended: (
                        <>
                          <MenuItem value={'close'}>Close</MenuItem>
                          {!!jackpot?.tiers.length && <MenuItem value={'delete'}>Delete</MenuItem>}
                        </>
                      ),
                    }[jackpot?.status]
                  }
                </SelectForm>
              </FormControl>
            </Box>
          )}
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
