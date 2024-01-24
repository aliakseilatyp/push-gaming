import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  jackpotID: number,
  status: number,
  createdAt: number,
  modifiedAt: number,
  configSchemaID: number,
  tiSchemaID: number,
  detailed: number,
  action: number,
  auditTrail: number,
  viewInstances: number,
) {
  return {
    jackpotID,
    status,
    createdAt,
    modifiedAt,
    configSchemaID,
    tiSchemaID,
    detailed,
    action,
    auditTrail,
    viewInstances,
  };
}

const rows = [
  createData(11234, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(112345, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(251, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(3241, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(46541, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(465123, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(46523441, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData(46223541, 2, 3, 4, 5, 6, 7, 8, 9, 10),
];

const JackpotsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Jackpot ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Modified at</TableCell>
            <TableCell align="right">Config schema ID</TableCell>
            <TableCell align="right">Tier instance config schema ID</TableCell>
            <TableCell align="right">detailed view</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Audit Trail</TableCell>
            <TableCell align="right">View Instances</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.jackpotID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.jackpotID}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.modifiedAt}</TableCell>
              <TableCell align="right">{row.configSchemaID}</TableCell>
              <TableCell align="right">{row.tiSchemaID}</TableCell>
              <TableCell align="right">{row.detailed}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
              <TableCell align="right">{row.auditTrail}</TableCell>
              <TableCell align="right">{row.viewInstances}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default JackpotsTable;
