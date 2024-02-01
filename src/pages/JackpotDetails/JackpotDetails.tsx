import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { jackpotData } from 'mockData/JackpotsMockData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TableHeadComponent from 'components/TableHeadComponent';
import CollapsibleRow from 'components/CollapsibleRow';
import { DetailedList } from './styles';
import { TableCustomCell, TableTitle } from 'layouts/Table/Table';
import { DATE_FORMAT } from 'constants/constants';

const CURRENCY_HEADER_TABLE_ROW = [{ label: 'Currency' }, { label: 'Enabled' }, { label: 'Multiplier' }];
const TIERS_HEADER_TABLE_ROW = [
  { label: 'Tier' },
  { label: 'Contribution Pct' },
  { label: 'Min contribution' },
  { label: 'Reseed Pct' },
  { label: 'seedAmount' },
  { label: 'Drop at' },
  { label: 'Type' },
];
const INTEGRATIONS_HEADER_TABLE_ROW = [{ label: 'Integrations' }, { label: 'Enabled' }];

const JackpotDetails = () => {
  const { id } = useParams();
  const jackpot = jackpotData.find(({ jackpotId }) => jackpotId === id);

  return (
    <>
      <h1>Jackpot details</h1>
      <Stack direction="row" spacing={5}>
        <Box>
          <Box marginBottom="5px">
            Jackpot ID: <strong>{jackpot?.jackpotId}</strong>
          </Box>
          <Box marginBottom="5px">
            Base currency: <strong>{jackpot?.config.baseCurrency}</strong>
          </Box>
          <div>Contributing details:</div>
          <DetailedList>
            <li>
              Amount: <strong>{jackpot?.config.contribution.amount}</strong>
            </li>
            <li>
              Operator percent: <strong>{jackpot?.config.contribution.operatorPct}</strong>
            </li>
            <li>
              Player percent: <strong>{jackpot?.config.contribution.playerPct}</strong>
            </li>
            <li>
              Type: <strong>{jackpot?.config.contribution.type}</strong>
            </li>
          </DetailedList>
        </Box>
        <div>
          <Box marginBottom="5px">
            House edge: <strong>{jackpot?.config.houseEdge}</strong>
          </Box>
          <Box marginBottom="5px">
            Min wager: <strong>{jackpot?.config.minWager}</strong>
          </Box>
          <div>Schedule:</div>
          <DetailedList>
            <li>
              Iterations: <strong>{jackpot?.config.schedule.iterations}</strong>
            </li>
            <li>
              Start at: <strong>{dayjs(jackpot?.config.schedule.startAt).format(DATE_FORMAT)}</strong>
            </li>
          </DetailedList>
        </div>
      </Stack>
      <TableTitle>Exchange rates</TableTitle>
      <Box marginBottom="5px">
        Type: <strong>{jackpot?.config.exchangeRates.type}</strong>
      </Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={CURRENCY_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.entries(jackpot?.config.exchangeRates.currencies ?? {}).map(([currencyName, currencyInfo]) => {
                return (
                  <TableRow key={currencyName}>
                    <TableCell align="center">{currencyName}</TableCell>
                    <TableCustomCell align="center" $enabled={currencyInfo.enabled}>
                      {currencyInfo.enabled ? 'true' : 'false'}
                    </TableCustomCell>
                    <TableCell align="center">{currencyInfo.multiplier}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TableTitle>Integrations</TableTitle>
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={INTEGRATIONS_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.entries(jackpot?.config.integrations ?? {}).map(([integrationName, integrationInfo]) => {
                return (
                  <CollapsibleRow
                    integrationName={integrationName}
                    integrationInfo={integrationInfo}
                    key={integrationName}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TableTitle>Tier section</TableTitle>
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={TIERS_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.entries(jackpot?.config.tiers ?? {}).map(([tierName, tierInfo]) => {
                return (
                  <TableRow key={tierName}>
                    <TableCell align="center">{tierName}</TableCell>
                    <TableCell align="center">{tierInfo.contributionPct}</TableCell>
                    <TableCell align="center">{tierInfo.minContribution}</TableCell>
                    <TableCell align="center">{tierInfo.reseedPct}</TableCell>
                    <TableCell align="center">{tierInfo.seedAmount}</TableCell>
                    <TableCell align="center">{tierInfo.trigger.dropAt}</TableCell>
                    <TableCell align="center">{tierInfo.trigger.type}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default JackpotDetails;
