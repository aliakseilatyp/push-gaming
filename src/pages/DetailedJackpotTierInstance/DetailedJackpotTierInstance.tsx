import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { JackpotTierInstanceData } from 'mockData/JackpotTierInstanceMockData';
import { statusJackpotTierInstanceColor } from 'constants/colors';
import TableHeadComponent from 'components/TableHeadComponent';
import { TableCustomCell, TableTitle } from 'layouts/Table/Table';
import { useState } from 'react';

const CURRENCY_HEADER_TABLE_ROW = [{ label: 'Currency' }, { label: 'Enabled' }, { label: 'Multiplier' }];

const DetailedJackpotTierInstance = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const jackpotTierInstance = JackpotTierInstanceData.find(({ instanceId }) => instanceId.toString() === id);

  return (
    <>
      <h1>Jackpot tier instance details</h1>
      <Stack direction="row" spacing={5}>
        <Box>
          <Box marginBottom="5px">
            Instance ID: <strong>{jackpotTierInstance?.instanceId}</strong>
          </Box>
          <Box marginBottom="5px">
            Jackpot ID: <strong>{jackpotTierInstance?.jackpotId}</strong>
          </Box>
          <Box marginBottom="5px">
            Tier ID: <strong>{jackpotTierInstance?.jackpotId}</strong>
          </Box>
        </Box>
        <Box>
          <Box marginBottom="5px">
            Created at: <strong>{dayjs(jackpotTierInstance?.createdAt).format('DD/MM/YYYY HH:mm:ss')}</strong>
          </Box>
          <Box marginBottom="5px">
            Modified at: <strong>{dayjs(jackpotTierInstance?.modifiedAt).format('DD/MM/YYYY HH:mm:ss')}</strong>
          </Box>
          <Box marginBottom="5px">
            Status:{' '}
            <strong style={{ color: statusJackpotTierInstanceColor[jackpotTierInstance?.status || 'ACTIVE'] }}>
              {jackpotTierInstance?.status}
            </strong>
          </Box>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        onClick={handleClick}
        margin="10px 0"
        sx={{ cursor: 'pointer' }}
      >
        <TableTitle> Exchange rates</TableTitle>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box marginBottom="5px">
          Type: <strong>{jackpotTierInstance?.config.exchangeRates.type}</strong>
        </Box>
        <Paper>
          <TableContainer>
            <Table>
              <TableHeadComponent headerTableItems={CURRENCY_HEADER_TABLE_ROW} />
              <TableBody>
                {Object.entries(jackpotTierInstance?.config.exchangeRates.currencies ?? {}).map(
                  ([currencyName, currencyInfo]) => {
                    return (
                      <TableRow key={currencyName}>
                        <TableCell align="center">{currencyName}</TableCell>
                        <TableCustomCell align="center" $enabled={currencyInfo.enabled}>
                          {currencyInfo.enabled ? 'true' : 'false'}
                        </TableCustomCell>
                        <TableCell align="center">{currencyInfo.multiplier}</TableCell>
                      </TableRow>
                    );
                  },
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Collapse>
    </>
  );
};

export default DetailedJackpotTierInstance;