import React, {useState, Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import jsPDF from 'jspdf';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#511c91",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(report, view) {
  
  return { report, view };
}




const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});
export default function CustomizedTables(props) {
 const generatePDF=()=> {
    var doc = new jsPDF('p', 'pt');

    doc.text(20, 20, 'This is the first title.');

    doc.setFont('helvetica','normal');
    doc.text(20, 60, 'This is the second title.');

    doc.setFont('helvetica','normal');
    doc.text(20, 100, 'This is the thrid title.');


    doc.save('demo.pdf');};
    const rows = [
      createData('LoomWise Analysis',<a href='#' onClick={generatePDF}>Download</a>),
      createData('Shiftwise Analysis',<a href='#'>Download</a>),
      createData('Shift',<a href='#'>Download</a>),
      createData('WTTI', <a href='#'>Download</a>),
    ];
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>REPORT TYPE</StyledTableCell>
            <StyledTableCell align="right">VIEW REPORT&nbsp;</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.report}>
              <StyledTableCell component="th" scope="row">
                {row.report}
              </StyledTableCell>
              <StyledTableCell align="right">{row.view}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
