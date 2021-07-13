import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

function RedirectTableToCreate() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/createuser");
  }
  
  return (                     
    <Button onClick={handleRoute}>
        Edit
    </Button>
  );
}

export default RedirectTableToCreate;