import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
const MangeOrder = () => {
    const [load, setLoad] = React.useState(true);
    const [orders,setOrders]=useState([])
    useEffect(()=>{
         fetch('https://damp-ridge-45794.herokuapp.com/user')
         .then(res=>res.json())
         .then(data=>setOrders(data))

    },[load])
    const handleStatus = (id, status) => {
        axios
          .patch(`https://damp-ridge-45794.herokuapp.com/user/${id}`, {
            status: status === 'pending' ? 'approved' : 'pending',
          })
          .then((response) => {
            if (response.data.modifiedCount) {
              setLoad(!load);
            }
          })
          .catch((error) => console.log(error));
      }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">BikeName</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.bikeName}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.status} {
                  row.status === 'pending' ? <Button onClick={() => handleStatus(row._id, row.status)}>Approved</Button> : <Button onClick={() => handleStatus(row._id, row.status)}>Pending</Button>
                } </TableCell>
                 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    );
};

export default MangeOrder;