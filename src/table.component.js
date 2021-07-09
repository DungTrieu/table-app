import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { CheckBox } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const oldUsers = [
  {id: '1', name: 'A', email: 'a@gmail.com', group: 'Ax', customer: '4.0',status: false},
  {id: '2', name: 'B', email: 'b@gmail.com', group: 'Bx', customer: '2.0',status: false},
  {id: '3', name: 'C', email: 'c@gmail.com', group: 'Cx', customer: '5.0',status: false},
  {id: '4', name: 'D', email: 'd@gmail.com', group: 'Dx', customer: '1.0',status: false},
  {id: '5', name: 'E', email: 'e@gmail.com', group: 'Ex', customer: '6.0',status: false},
];

const TableComponent = () => {


  // const [checked,setChecked] = useState(true)
  // const [checked1,setChecked1] = useState(true)
  // const [idCheck,setIdCheck] = useState([])
  // const [index,setIndex] = useState(0)
  
  // const handleIdCheck = (props) => {
  //   setIdCheck(prevIdCheck => [...prevIdCheck,props])
  // }
  // const handleCheck = (e) => {
  //   setChecked(e.target.checked)
  // }
  // const handleIndex = (index) => {
  //   setIndex(index)
  // }


  const [users, setUsers] = useState([])

  
  useEffect(function effectFunction(){
    console.log(oldUsers)
    if (oldUsers) {
      setUsers(oldUsers)
    }
    console.log('Current User State', users)
  },[]) 


  const handleCheck = (row) => {
    console.log(row)
    let newUsers = users.map((el, index)=>(
      el.id !== row.id? el: {...el, status: !el.status}
    ))
    setUsers(newUsers)
    console.log('New User State', newUsers)
  }

  const handleButtonClick = () => {
    const getCheckedUsers = (ele1) => {
      if (ele1.status === true) {
        return ele1.id, ele1.status
      } 
    }  
    const delUsers = users.map(getCheckedUsers)
    console.log('Del User State 1', delUsers)
    // const delUsersInfo = delUsers.filter((ele2) => {
    //   if (ele2.id !== 0){
    //     return ele2 !== undefined
    //   }
    // })
    // console.log('Del User State 2', delUsersInfo)
  }

  const classes = useStyles();

    return (
      <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                {/* <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                /> */}
              </TableCell>
              <TableCell align="center">ID </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Group</TableCell>
              <TableCell align="center">Customer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id} selected={row.status}>
                <TableCell align="center">
                  <Checkbox
                    onChange={handleCheck.bind(this, row)}
                    checked={row.status}
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row"> {row.id}  </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.group}</TableCell>
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            )
            )}
          </TableBody>  
        </Table>
      </TableContainer>
      <Button onClick={handleButtonClick}>Click me</Button>
    </div>
    );
}

export default TableComponent
