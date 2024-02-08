import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Collapse, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import TableHeadComponent from 'components/TableHeadComponent';
import { TableCustomCell } from 'layouts/Table';
import { TableCollapsibleRow, TableCustomRow } from './styles';
import { Integration } from 'types/JackpotsInterface';
import { GAMES_HEADER_TABLE_ROW } from 'constants/constants';

interface ICollapsibleRow {
  integrationName: string;
  integrationInfo: Integration;
}


const CollapsibleRow = ({ integrationName, integrationInfo }: ICollapsibleRow) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableCollapsibleRow onClick={handleClick}>
        <TableCell align="center">
          <Stack direction="row">
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            <Box flexGrow={1}> {integrationName}</Box>
          </Stack>
        </TableCell>
        <TableCustomCell align="center" $enabled={integrationInfo.enabled}>
          {integrationInfo.enabled ? 'true' : 'false'}
        </TableCustomCell>
      </TableCollapsibleRow>
      <TableRow>
        <TableCustomCell colSpan={2} $open={open}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHeadComponent headerTableItems={GAMES_HEADER_TABLE_ROW} />
                  <TableBody>
                    {Object.entries(integrationInfo.games).map(([game, gameInfo]) => {
                      return (
                        <TableCustomRow key={game}>
                          <TableCell align="center">{game}</TableCell>
                          <TableCustomCell align="center" $enabled={gameInfo.enabled}>
                            {gameInfo.enabled ? 'true' : 'false'}
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
      </TableRow>
    </>
  );
};

export default CollapsibleRow;
