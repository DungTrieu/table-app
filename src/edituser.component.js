import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';




const EditUser = () => {
  const [editUsers, setEditUsers] = useState([])
  // const [editUsersInfo, setEditUsersInfo] = useState([])
  const location = useLocation()

  // const getCheckedUsers = (ele3) => {
  //   if (ele3.status === true) {
  //     return ele3
  //   }
  //   return null
  // }

  useEffect(() => {
    console.log(location.state)
    if (location.state) {
      setEditUsers(location.state.row)
    }
  }, [location])

  // useEffect(() => {
  //   if (editUsers){
  //   setEditUsersInfo(editUsers.map(getCheckedUsers).filter((ele2) => {
  //     return ele2 != null;
  //   }))
  //   }

  // },[])

  console.log('Edit Users Info', editUsers)

  // let editUsersInfo = editUsers.map(getCheckedUsers)


  const groups = [
    {
      value: 'Fuel',
      label: 'Fuel',
    },
    {
      value: 'Industrial Parts',
      label: 'Industrial Parts',
    },
    {
      value: 'Lubricants',
      label: 'Lubricants',
    },
    {
      value: 'Generators',
      label: 'Generators',
    },
    {
      value: 'Vehicles',
      label: 'Vehicles',
    },
    {
      value: 'Packaging',
      label: 'Packaging',
    }
  ];

  const customers = [
    {
      value: 'Petrolimex',
      label: 'Petrolimex',
    },
    {
      value: 'Penarol',
      label: 'Penarol',
    },
    {
      value: 'Shell',
      label: 'Shell',
    },
    {
      value: 'Castrol',
      label: 'Castrol',
    }
  ];
  // const groups = ['Fuel','Industrial Parts','Lubricants','Generators','Vehicles','Packaging']
  // const customers = ['Petrolimex','Penarol','Shell','Castrol']
  // const users = [
  //   {id: 609, name: 'A', email: 'a@gmail.com', group: groups[1], customer: customers[0], status: false},
  //   {id: 12, name: 'Tran Van A', email: 'tranvana@gmail.com', group: groups[2], customer: customers[0], status: false},
  //   {id: 1012, name: '@crisp', email: 'crispwastaken@gmail.com', group:groups[3], customer: customers[2], status: false},
  //   {id: 402, name: 'turgid123', email: 'turgid123@gmail.com', group:groups[4], customer: customers[1], status: false},
  //   {id: 798, name: 'DDDDD', email: 'xdddddd42@gmail.com', group:groups[5], customer: customers[3], status: false}
  // ]
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [group, setGroup] = useState('')
  const [customer, setCustomer] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const handleCustomer = (e) => {
    setCustomer(e.target.value)
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));

  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <h1>EDIT USER PAGE</h1>
          <TextField
            id="name-basic"
            label="Name"
            onChange={handleName}
            value={editUsers.name}

          />
          <TextField
            id="email-basic"
            label="Email"
            onChange={handleEmail}
            value={editUsers.email}
          />
          <TextField
            id="standard-select-group"
            select
            label="Group"
            onChange={handleGroup}
            value={editUsers.group}
            helperText="Please select your group"
          >
            {groups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-customer"
            select
            label="Customer"
            onChange={handleCustomer}
            value={editUsers.group}
            helperText="Please select your customer"
          >
            {customers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField 
            id ="name-basic"
            label="Password"
            type="password"
            onChange = {handlePassword}
          />
          {password}
          <TextField 
            id ="name-basic"
            label="Confirm Password"
            type="Password"
            onChange = {handleConfirmPassword}
          //   onInput = {handlePasswordCheck}
            helperText = {passwordCheck}
          />
          {confirmPassword} */}
          <p>User Details:</p>
          <p>Name:   {name}</p>
          <p>Email:  {email}</p>
          <p>Group:  {group}</p>
          <p>Customer:  {customer}</p>
        </div>
      </div>
    </form>
  )
}


export default EditUser