import {
  Box,
  Button,
  DialogActions,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { TableCustomCell } from 'layouts/Table';
import {
  IContributionsInfo,
  ICurrenciesInfo,
  IIntegrationsInfo,
  IJackpotTypesInfo,
  IScheduleInfo,
  ITiersInfo,
} from 'types/FormikTypes';
import {
  CURRENCY_HEADER_TABLE_ROW,
  DATE_FORMAT,
  GAMES_HEADER_TABLE_ROW,
  IGP_HEADER_TABLE_ROW,
  TIERS_HEADER_TABLE_ROW,
} from 'constants/constants';
import dayjs from 'dayjs';
import { Modal } from './styles';

interface IConfirmationFormModal {
  open: boolean;
  handleClose: () => void;
  typeInfo: IJackpotTypesInfo;
  currenciesInfo: ICurrenciesInfo;
  contributionsInfo: IContributionsInfo;
  integrationsInfo: IIntegrationsInfo;
  scheduleInfo: IScheduleInfo;
  tiersInfo: ITiersInfo;
}

const ConfirmationFormModal = ({
  open,
  handleClose,
  typeInfo,
  currenciesInfo,
  contributionsInfo,
  integrationsInfo,
  scheduleInfo,
  tiersInfo,
}: IConfirmationFormModal) => (
  <Modal open={open} onClose={handleClose}>
    <h2>Jackpot</h2>
    <Box margin="5px 0">
      Jackpot type: <strong>{typeInfo.jackpotType}</strong>
    </Box>
    <Box margin="5px 0">
      Base currency: <strong>{currenciesInfo.baseCurrency}</strong>
    </Box>
    {currenciesInfo.currencies.length && (
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={CURRENCY_HEADER_TABLE_ROW} />
            <TableBody>
              {currenciesInfo.currencies.map(({ currency, enabled, multiplier }) => {
                return (
                  <TableRow key={currency}>
                    <TableCell align="center">{currency}</TableCell>
                    <TableCustomCell align="center" $enabled={enabled}>
                      {enabled ? 'true' : 'false'}
                    </TableCustomCell>
                    <TableCell align="center">{multiplier}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )}
    <Box margin="5px 0">
      Amount: <strong>{contributionsInfo.amount}</strong>
    </Box>
    <Box margin="5px 0">
      Operator percentage: <strong>{contributionsInfo.operatorPct}</strong>
    </Box>
    <Box margin="5px 0">
      Player percentage: <strong>{contributionsInfo.operatorPct}</strong>
    </Box>
    <Box margin="5px 0">
      Minimal wager: <strong>{contributionsInfo.minWager}</strong>
    </Box>
    <Box margin="5px 0">
      House edge: <strong>{contributionsInfo.houseEdge}</strong>
    </Box>
    {integrationsInfo.games.length && (
      <Box margin="5px 0">
        <Paper>
          <TableContainer>
            <Table>
              <TableHeadComponent headerTableItems={GAMES_HEADER_TABLE_ROW} />
              <TableBody>
                {integrationsInfo.games.map(({ game, enabled }) => {
                  return (
                    <TableRow key={game}>
                      <TableCell align="center">{game}</TableCell>
                      <TableCustomCell align="center" $enabled={enabled}>
                        {enabled ? 'true' : 'false'}
                      </TableCustomCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    )}
    {integrationsInfo.igpCodes.length && (
      <Box margin="5px 0">
        <Paper>
          <TableContainer>
            <Table>
              <TableHeadComponent headerTableItems={IGP_HEADER_TABLE_ROW} />
              <TableBody>
                {integrationsInfo.igpCodes.map(({ igp, enabled }) => {
                  return (
                    <TableRow key={igp}>
                      <TableCell align="center">{igp}</TableCell>
                      <TableCustomCell align="center" $enabled={enabled}>
                        {enabled ? 'true' : 'false'}
                      </TableCustomCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    )}
    <Box margin="5px 0">
      Jackpot type: <strong>{typeInfo.jackpotType}</strong>
    </Box>
    <Box margin="5px 0">
      Start at: <strong>{dayjs(scheduleInfo.startAt).format(DATE_FORMAT)}</strong>
    </Box>
    {tiersInfo.tiers.length && (
      <Box margin="5px 0">
        <Paper>
          <TableContainer>
            <Table>
              <TableHeadComponent headerTableItems={TIERS_HEADER_TABLE_ROW} />
              <TableBody>
                {tiersInfo.tiers.map(
                  ({ tier, contributionPct, minContribution, reseedPct, seedAmount, dropAt, type }) => {
                    return (
                      <TableRow key={tier}>
                        <TableCell align="center">{tier}</TableCell>
                        <TableCell align="center">{contributionPct}</TableCell>
                        <TableCell align="center">{minContribution}</TableCell>
                        <TableCell align="center">{reseedPct}</TableCell>
                        <TableCell align="center">{seedAmount}</TableCell>
                        <TableCell align="center">{dayjs(dropAt).format(DATE_FORMAT)}</TableCell>
                        <TableCell align="center">{type}</TableCell>
                      </TableRow>
                    );
                  },
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    )}
    <DialogActions>
      <Button onClick={handleClose}>Back</Button>
      <Button variant="contained" color="primary" onClick={handleClose} autoFocus>
        Create jackpot
      </Button>
    </DialogActions>
  </Modal>
);

export default ConfirmationFormModal;
