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
// import { CheckBox } from '@material-ui/icons';
import { Button } from '@material-ui/core';
// import { MenuItem } from '@material-ui/core';
// import { Select } from '@material-ui/core';
import Header from "./header.component"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const groups = ['Fuel', 'Industrial Parts', 'Lubricants', 'Generators', 'Vehicles', 'Packaging']
const customers = ['Petrolimex', 'Penarol', 'Shell', 'Castrol']

const oldUsers = [
  { id: 609, name: 'A', email: 'a@gmail.com', group: groups[1], customer: customers[0], status: false },
  { id: 12, name: 'Tran Van A', email: 'tranvana@gmail.com', group: groups[2], customer: customers[0], status: false },
  { id: 1012, name: '@crisp', email: 'crispwastaken@gmail.com', group: groups[3], customer: customers[2], status: false },
  { id: 402, name: 'turgid123', email: 'turgid123@gmail.com', group: groups[4], customer: customers[1], status: false },
  { id: 798, name: 'DDDDD', email: 'xdddddd42@gmail.com', group: groups[5], customer: customers[3], status: false }
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
  // const [group, setGroup] = useState()
  // const 

  useEffect(function effectFunction() {
    console.log(oldUsers)
    if (oldUsers) {
      setUsers(oldUsers)
    }
    console.log('Current User State', users)
  }, [])


  const handleCheck = (row) => {
    console.log(row)
    let newUsers = users.map((el) => (
      el.id !== row.id ? el : { ...el, status: !el.status }
    ))
    setUsers(newUsers)
    console.log('New User State', newUsers)
  }

  // const handleSelectChange = (e) => {
  //   // setGroup(e.target.value);
  // };

  // const handleEditButtonClick = () => {
  //   // if user.status === true,//
  //   //enables select function for group and customers, enables editing names
  //   //if newData !== oldData
  //   //replace oldData with newData
  //   //update the Data
  //   // let editUsers = users
  //   // const [editRow,setEditRow] = useState([])
  // }

  const handleDeleteButtonClick = () => {

    const getCheckedUsers = (ele1) => {
      if (ele1.status === true) {
        return [ele1.id, ele1.status]
      }
      return null
    }
    const delUsers = users.map(getCheckedUsers).filter((ele2) => {
      return ele2 != null;
    })



    console.log('Del User State 1', delUsers)
    // const delUsersInfo = delUsers.filter((ele2) => {
    //   if (ele2.id !== 0){
    //     return ele2 !== undefined
    //   }
    // })
    // console.log('Del User State 2', delUsersInfo)
  }

  // const handleEditUsers = (ele3) => {
  //   if (ele3.status === true) {
  //     return ele3
  //   }     
  // }

  const history = useHistory();


  const handleEditRoute = (row) => {
    history.push({
      pathname: '/edituser',
      state: { row },
    });
  }

  const classes = useStyles();

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label="a dense table">
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
              <TableRow key={row.id} selected={row.status} onClick={handleEditRoute.bind(this, row)}>
                <TableCell align="center">
                  <Checkbox
                    onChange={handleCheck.bind(this, row)}
                    checked={row.status}
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center" >{row.group}
                  {/* <Select value={row.group} onChange={handleSelectChange}>
                    <MenuItem value={'Ax'}>Ax</MenuItem>
                    <MenuItem value={'Bx'}>Bx</MenuItem>
                    <MenuItem value={'Cx'}>Cx</MenuItem>
                    <MenuItem value={'Dx'}>Dx</MenuItem>
                    <MenuItem value={'Ex'}>Ex</MenuItem>
                  </Select> */}
                </TableCell>
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button color='primary' variant='outlined' onClick={handleDeleteButtonClick}>Delete</Button>
      {/* <RedirectTableToCreate /> */}
      {/* <EditUser editUsers = {users.map(handleEditUsers)} /> */}
      {/* <Button onClick={handleRoute}>
        Edit
      </Button> */}
    </div>
  );
}

export default TableComponent
