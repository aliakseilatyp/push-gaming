import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { INTEGRATIONS_HEADER_TABLE_ROW } from 'constants/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import { JackpotMockData } from 'mockData/JackpotMockData';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import { statusColors } from 'constants/colors';
import { useContext } from 'react';
import { KeycloackContext } from 'context/KeyckoakContext';
import { ROLES } from 'constants/roles';

const IntegrationsTab = () => {
  const jackpot = JackpotMockData;
  const { keycloackValue } = useContext(KeycloackContext);
  const isIntegrationAdmin = keycloackValue?.realmAccess?.roles.includes(ROLES.integrationAdmin);

  return (
    <Stack direction="column" spacing={3}>
      {isIntegrationAdmin && (
        <Link to={routes.createIntegration} style={{ alignSelf: 'end' }}>
          <Button variant="contained" style={{ backgroundColor: '#264274' }}>
            New
          </Button>
        </Link>
      )}
      <Paper>
        <TableContainer>
          <Table>
            <TableHeadComponent headerTableItems={INTEGRATIONS_HEADER_TABLE_ROW} />
            <TableBody>
              {Object.entries(jackpot.integrations).map(([integrationName, integrationInfo]) => {
                return (
                  <TableRow key={integrationName}>
                    <TableCell align="center">
                      <Link
                        to={`${routes.updateIntegration}/${integrationName}`}
                        onClick={(e) => {
                          if (!isIntegrationAdmin) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <Button style={{ color: '#264274' }}>{integrationName}</Button>
                      </Link>
                    </TableCell>
                    <TableCell align="center" style={{ color: statusColors[integrationInfo.status] }}>
                      {integrationInfo.status}
                    </TableCell>
                    <TableCell align="center">
                      <Button style={{ color: '#264274' }}>
                        <DeleteIcon />
                      </Button>
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
