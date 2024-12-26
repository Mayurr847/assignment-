import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect,useState } from 'react';






export default function Mui() {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setData(res.data))
        
    },[])
    const deledata=(id)=>{
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>
            setData((prevData) => prevData.filter((data) => data.id !== id)
        ))
        .then(console.log(data))
        
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell>{data.price}</TableCell>
              <TableCell><button onClick={()=>deledata(data.id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
