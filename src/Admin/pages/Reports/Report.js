import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Report.css';
import Axios from 'axios';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#483D8B",
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


        const downloadLoomWise=()=>{
            const doc = new jsPDF('p','pt');
            let loomdata = []
            
            Axios
            .get(`http://localhost:3006/download_loom_analysis`)
            .then(res => {
              console.log(res);
              for (const dataObj of res.data){
                var d1 = dataObj.l_date
                var dt = new Date(d1);
                var options = {month : "short", day: "numeric", year: "numeric"};
                dataObj.l_date = dt.toLocaleDateString("en-US", options);
                loomdata.push(dataObj);
              }
              let loomwisetablebody = []
              for (const loomwiserow of loomdata){
                    loomwisetablebody.push([loomwiserow.l_date,
                    loomwiserow.loom_no, 
                    loomwiserow.order_no, 
                    loomwiserow.total_mtr,
                    loomwiserow.target_rs,
                    loomwiserow.rs_generated
                  ])
              }
            doc.text("Loomwise Analysis", 300, 20, 'center');
              doc.autoTable({
                head: [['Date', 'Loom no.', 'Order no.', 'Total meter', 'Target rs', 'Rs generated']],
                body: loomwisetablebody
              });
              doc.save('Loom_wise_analysis.pdf');
            })
            .catch(err => {
              console.log(err);
            });
            }

        const downloadShiftWise=()=>{
          const doc = new jsPDF('p','pt');
          let shiftdata = []
          
          Axios
          .get(`http://localhost:3006/download_shift_analysis`)
          .then(res => {
            console.log(res);
            for (const dataObj of res.data){
              var d1 = dataObj.s_date
              var dt = new Date(d1);
              var options = {month : "short", day: "numeric", year: "numeric"};
              dataObj.s_date = dt.toLocaleDateString("en-US", options);
              shiftdata.push(dataObj);
            }
            let shiftwisetablebody = []
            for (const shiftwiserow of shiftdata){
                  shiftwisetablebody.push([
                  shiftwiserow.s_date,
                  shiftwiserow.shift, 
                  shiftwiserow.total_mtr,
                  shiftwiserow.total_picks,
                  shiftwiserow.target,
                  shiftwiserow.balance,
                  shiftwiserow.supervisor,
                ])
            }
          doc.text("Shiftwise Analysis", 300, 20, 'center');
            doc.autoTable({
              head: [['Date', 'Shift', 'Total meter', 'Total picks', 'Target', 'Balance', 'Supervisor']],
              body: shiftwisetablebody
            });
            doc.save('Shift_wise_analysis.pdf');
          })
          .catch(err => {
            console.log(err);
          });
        }

        const downloadShift=()=>{
          const doc = new jsPDF('p','pt');
          let sdata = []
          
          Axios
          .get(`http://localhost:3006/download_shift`)
          .then(res => {
            console.log(res);
            for (const dataObj of res.data){
              var d1 = dataObj.s_date
              var dt = new Date(d1);
              var options = {month : "short", day: "numeric", year: "numeric"};
              dataObj.s_date = dt.toLocaleDateString("en-US", options);
              sdata.push(dataObj);
            }
            let shifttablebody = []
            for (const shiftrow of sdata){
                  shifttablebody.push([
                  shiftrow.s_date,
                  shiftrow.order_no, 
                  shiftrow.loom_no,
                  shiftrow.shift,
                  shiftrow.total_picks,
                  shiftrow.meter,
                  shiftrow.waste_weight,
                ])
            }
          doc.text("Seperate analysis of shift1 and shift2", 300, 20, 'center');
            doc.autoTable({
              head: [['Date', 'Order no.', 'Loom no', 'Shift', 'Total Picks', 'Meter', 'Waste weight']],
              body: shifttablebody
            });
            doc.save('Shift.pdf');
          })
          .catch(err => {
            console.log(err);
          });
        }

        const downloadWTTI=()=>{
          const doc = new jsPDF('p','pt');
          let wttidata = []
          
          Axios
          .get(`http://localhost:3006/download_wtti`)
          .then(res => {
            console.log(res);
            for (const dataObj of res.data){
              var d1 = dataObj.w_date
              var dt = new Date(d1);
              var options = {month : "short", day: "numeric", year: "numeric"};
              dataObj.w_date = dt.toLocaleDateString("en-US", options);
              wttidata.push(dataObj);
            }
            let wttitablebody = []
            for (const wttirow of wttidata){
                  wttitablebody.push([
                  wttirow.w_date,
                  wttirow.target_asDate,
                  wttirow.achieved_asDate,
                  wttirow.balance_asDate,
                ])
            }
          doc.text("WTTI", 300, 20, 'center');
            doc.autoTable({
              head: [['Date', 'Target on date', 'Achieved on date', 'Balance on date']],
              body: wttitablebody
            });
            doc.save('WTTI.pdf');
          })
          .catch(err => {
            console.log(err);
          });
        }


<table id="#table"></table>

const rows = [
    
    createData( 'LoomWise Analysis', <button variant="outline-secondary" onClick= {downloadLoomWise}>Generate PDF</button>),
     createData('Shiftwise Analysis',<button onClick= {downloadShiftWise}>Generate PDF</button>),
     createData('Shift',<button onClick= {downloadShift}>Generate PDF</button>),
     createData('WTTI', <button onClick= {downloadWTTI}>Generate PDF</button>),
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
    
  );}