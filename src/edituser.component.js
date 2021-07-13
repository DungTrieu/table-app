import { makeStyles } from '@material-ui/core';


const EditUser = () => {
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
          <TextField 
            id ="name-basic"
            label="Name"
            onChange = {handleName}
            defaultValue = {'A'}
          />
          <TextField 
            id ="email-basic"
            label="Email"
            onChange = {handleEmail}
          />
          <TextField
            id="standard-select-group"
            select
            label="Group"
            value={group}
            onChange={handleGroup}
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
            label="Gender"
            value={customer}
            onChange={handleCustomer}
            helperText="Please select your gender"
          >
            {customers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            ))}
          </TextField>
          <TextField 
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
          {confirmPassword}
        <p>User Details:</p>
        <p>Name:   {name}</p>
        <p>Email:  {email}</p>
        <p>Group:  {group}</p>
        <p>Customer:  {customer}</p>
        </div>
        </form>
        )  
}


export default EditUser