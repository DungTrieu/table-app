// import { DataGrid } from "@material-ui/data-grid";
// import { id } from "postcss-selector-parser";
// import React, { useEffect } from "react";
// import { useState } from "react";

// const Table2 = () => {

//     const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'name',
//         headerName: 'Name',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'email',
//         headerName: 'Email',
//         type: 'email',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'group',
//         headerName: 'Group',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'customer',
//         headerName: 'Customer',
//         width: 150,
//         editable: true,
//     }
//     ];

//     const rows = [
//     { id: 1, name: 'Snow', email: 'snow@gmail.com', group: 'a', customer: 'ax' },
//     { id: 2, name: 'Snow', email: 'snow@gmail.com', group: 'a', customer: 'ax' },
//     { id: 3, name: 'Snow', email: 'snow@gmail.com', group: 'a', customer: 'ax' },
//     { id: 4, name: 'Snow', email: 'snow@gmail.com', group: 'a', customer: 'ax' },
//     { id: 5, name: 'Snow', email: 'snow@gmail.com', group: 'a', customer: 'ax' },
//     ];


//     return (
//         <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//             disableSelectionOnClick

//         />
//         </div>
//     );

// }

// export default Table2