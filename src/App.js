import React from "react"
import TableComponent from "./table.component"//
// import DelButton from "./button.component"
// import Table2 from "./table2.component"
// import Customers from "./testcustomer.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import CreateUser from "./createuser.component"
import EditUser from "./edituser.component"


function App() {
    return (
        <Router>
            <div>
                <Nav />
                {/* <Route path='/' component={Home} /> */}
                <Route path='/tablecomponent' component={TableComponent} />
                <Route path='/createuser' component={CreateUser} />
                <Route path='/edituser' component={EditUser} />
                {/* <TableComponent />
                <CreateUser /> */}
                {/* <DelButton /> */}
                {/* <Customers /> */}  
                {/* <TextF /> */}
                {/* <Table2 /> */}
            </div>
        </Router>
    )
}

export default App