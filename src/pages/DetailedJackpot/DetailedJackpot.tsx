import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { JackpotsArray } from 'mockData/getJackpots';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TableHeadComponent from 'components/TableHeadComponent';
import { DetailedList, TableCustomCell, TableCustomRow, TableTitle } from './styles';
import CollapsibleRow from 'components/CollapsibleRow';

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
const GAMES_HEADER_TABLE_ROW = [{ label: 'Game' }, { label: 'Enabled' }];

const DetailedJackpot = () => {
  const { id } = useParams();
  const [{ jackpotId, config }] = JackpotsArray.filter((el) => id === el.jackpotId);

  return (
    <>
      <h1>Jackpot ID: {jackpotId}</h1>
      <Stack direction="row" spacing={5}>
        <Box>
          <Box marginBottom="5px">
            Base currency: <strong>{config.baseCurrency}</strong>
          </Box>
          <div>Contributing details:</div>
          <DetailedList>
            <li>
              Amount: <strong>{config.contribution.amount}</strong>
            </li>
            <li>
              Operator percent: <strong>{config.contribution.operatorPct}</strong>
            </li>
            <li>
              Player percent: <strong>{config.contribution.playerPct}</strong>
            </li>
            <li>
              Type: <strong>{config.contribution.type}</strong>
            </li>
          </DetailedList>
        </Box>
        <div>
          <Box marginBottom="5px">
            House edge: <strong>{config.houseEdge}</strong>
          </Box>
          <Box marginBottom="5px">
            Min wager: <strong>{config.minWager}</strong>
          </Box>
          <div>Schedule:</div>
          <DetailedList>
            <li>
              Iterations: <strong>{config.schedule.iterations}</strong>
            </li>
            <li>
              Start at: <strong>{dayjs(config.schedule.startAt).format('DD/MM/YYYY HH:mm:ss')}</strong>
            </li>
          </DetailedList>
        </div>
      </Stack>
      <TableTitle>Exchange rates</TableTitle>
      <Box marginBottom="5px">
        Type: <strong>{config.exchangeRates.type}</strong>
      </Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={CURRENCY_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.keys(config.exchangeRates.currencies).map((value) => {
                const currency = config.exchangeRates.currencies[value];
                return (
                  <TableRow key={value}>
                    <TableCell align="center">{value}</TableCell>
                    <TableCustomCell align="center" $enabled={currency.enabled}>
                      {currency.enabled ? 'true' : 'false'}
                    </TableCustomCell>
                    <TableCell align="center">{currency.multiplier}</TableCell>
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
              {Object.keys(config.integrations).map((value) => {
                const integration = config.integrations[value];
                return (
                  <Fragment key={value}>
                    <CollapsibleRow
                      renderRow={(open) => (
                        <>
                          <TableCell align="center">
                            <Stack direction="row">
                              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                              <Box flexGrow={1}> {value}</Box>
                            </Stack>
                          </TableCell>
                          <TableCustomCell align="center" $enabled={integration.enabled}>
                            {integration.enabled ? 'true' : 'false'}
                          </TableCustomCell>
                        </>
                      )}
                      renderCollapse={(open) => (
                        <>
                          <TableCustomCell colSpan={2} $open={open}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              <Paper>
                                <TableContainer>
                                  <Table>
                                    <TableHeadComponent headerTableItems={GAMES_HEADER_TABLE_ROW} />
                                    <TableBody>
                                      {Object.keys(integration.games).map((gameValue) => {
                                        const game = integration.games[gameValue];
                                        return (
                                          <TableCustomRow key={gameValue}>
                                            <TableCell align="center">{gameValue}</TableCell>
                                            <TableCustomCell align="center" $enabled={game.enabled}>
                                              {game.enabled ? 'true' : 'false'}
                                            </TableCustomCell>
                                          </TableCustomRow>
                                        );
                                      })}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </Paper>
                            </Collapse>
                          </TableCustomCell>
                        </>
                      )}
                    />
                  </Fragment>
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
              {Object.keys(config.tiers).map((value) => {
                const tier = config.tiers[value];
                return (
                  <TableRow key={value}>
                    <TableCell align="center">{value}</TableCell>
                    <TableCell align="center">{tier.contributionPct}</TableCell>
                    <TableCell align="center">{tier.minContribution}</TableCell>
                    <TableCell align="center">{tier.reseedPct}</TableCell>
                    <TableCell align="center">{tier.seedAmount}</TableCell>
                    <TableCell align="center">{tier.trigger.dropAt}</TableCell>
                    <TableCell align="center">{tier.trigger.type}</TableCell>
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

export default DetailedJackpot;
