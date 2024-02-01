import { useState } from 'react';
import { Integration } from 'types';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TableHeadComponent from 'components/TableHeadComponent';
import { TableCustomCell } from 'layouts/Table';
import { TableCollapsibleRow, TableCustomRow } from './styles';

interface ICollapsibleRow {
  integrationName: string;
  integrationInfo: Integration;
}

const GAMES_HEADER_TABLE_ROW = [{ label: 'Game' }, { label: 'Enabled' }];

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
