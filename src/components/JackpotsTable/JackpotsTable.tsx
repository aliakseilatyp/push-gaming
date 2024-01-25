import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getJackpots } from 'mockData/getJackpots';
import dayjs from 'dayjs';
import TableHeadComponent from 'components/TableHeadComponent';
import { StatusColor } from 'types';
import { TableContainerStyled } from './styles';

const JACKPOTS_HEADER_TABLE_ROW = [
  { label: 'Jackpot ID' },
  { label: 'Status' },
  { label: 'Created at' },
  { label: 'Modified at' },
  { label: 'Config schema ID' },
  { label: 'Tier instance config schema ID' },
  { label: 'Detailed' },
  { label: 'Action' },
  { label: 'Audit TrailD' },
  { label: 'View Instances' },
];

const JackpotsTable = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { content } = getJackpots();

  return (
    <Paper>
      <TableContainerStyled>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadComponent headerTableItems={JACKPOTS_HEADER_TABLE_ROW} />
          <TableBody>
            {content.map(({ jackpotId, status, createdAt, modifiedAt, configSchemaId, tierInstanceConfigSchemaId }) => (
              <TableRow key={jackpotId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{jackpotId}</TableCell>
                <TableCell align="center" style={{ color: StatusColor[status] }}>
                  {status}
                </TableCell>
                <TableCell align="center">{dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
                <TableCell align="center">{dayjs(modifiedAt).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
                <TableCell align="center">{configSchemaId}</TableCell>
                <TableCell align="center">{tierInstanceConfigSchemaId}</TableCell>
                <TableCell align="center">
                  <Button>Detailed</Button>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>ACTIVATE</MenuItem>
                    <MenuItem onClick={handleClose}>UPDATE</MenuItem>
                    <MenuItem onClick={handleClose}>FINISH</MenuItem>
                    <MenuItem onClick={handleClose}>SUSPEND</MenuItem>
                  </Menu>
                </TableCell>
                <TableCell align="center">
                  <Button>Audit trail</Button>
                </TableCell>
                <TableCell align="center">
                  <Button>View Instances</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </Paper>
  );
};
export default JackpotsTable;
