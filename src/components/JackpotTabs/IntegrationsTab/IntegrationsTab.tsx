import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { INTEGRATIONS_HEADER_TABLE_ROW } from 'constants/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import { JackpotMockData } from 'mockData/JackpotMockData';

const IntegrationsTab = () => {
  const jackpot = JackpotMockData;
  console.log(jackpot);

  return (
    <Stack direction="column" spacing={3}>
      <Button variant="contained" onClick={() => {}} style={{ alignSelf: 'end' }}>
        New
      </Button>
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={INTEGRATIONS_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.entries(jackpot.integrations).map(([integrationName, integrationInfo]) => {
                return (
                  <TableRow key={integrationName}>
                    <TableCell align="center">{integrationName}</TableCell>
                    <TableCell align="center">{integrationInfo.status}</TableCell>
                    <TableCell align="center">
                      <div>
                        <DeleteIcon />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
};

export default IntegrationsTab;
