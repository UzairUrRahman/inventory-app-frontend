// import { useState, useEffect } from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import EmployeeLogin from './employee-login';
// import AdminLogin from './admin-login';
// import Home from './Home';
// import Tasks from './Task';
// import Inventory from './Inventory';
// import InventoryUpdate from './InventoryUpdate';
// import ManageTask from './ManageTask'; // Corrected typo
// import ViewChecklist from './ViewChecklist';
// import InventoryManagement from './admin-inventory';
// import EmployeeManagement from './AddEmployee';


// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const token = localStorage.getItem('token')
//   // console.log({token});
//   useEffect(() => {
//     console.log("ruunig")
//     // const token = localStorage.getItem('token'); // Replace with your token key
//     if (token) {
//       // Perform any basic token validation here (e.g., format check)
//       setIsAuthenticated(true); // Assuming basic validation passes
//     }else{
//       setIsAuthenticated(false);
//     }
//   }, [token, isAuthenticated]);

//   return (
//     <>
//       <BrowserRouter basename="/">
//         <div>
//           {/* Navigation (optional) */}


//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/employee-login" element={<EmployeeLogin />} />
//             <Route path="/admin-login" element={<AdminLogin />} />

//             {/* Protected routes */}
//             <Route
//               path="/task-list"
//               element={
//                 isAuthenticated ? <Tasks /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/inventory"
//               element={
//                 isAuthenticated ? <Inventory /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/inventory-update"
//               element={
//                 isAuthenticated ? <InventoryUpdate /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 isAuthenticated ? <EmployeeManagement /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/manage-task"
//               element={
//                 isAuthenticated ? <ManageTask /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/view-checklist/:id"
//               element={
//                 isAuthenticated ? <ViewChecklist /> : <Navigate to="/" replace />
//               }
//             />
//             <Route
//               path="/inventory-management"
//               element={
//                 isAuthenticated ? <InventoryManagement /> : <Navigate to="/" replace />
//               }
//             />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Home from './Home';
import Tasks from './Task';
import Inventory from './Inventory';
import EmployeeManagement from './AddEmployee';
import ManageTask from './ManageTask';
import ViewChecklist from './ViewChecklist';
import InventoryManagement from './admin-inventory';
import EmployeeLogin from './employee-login';
import AdminLogin from './admin-login';
import InventoryUpdate from './InventoryUpdate';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsAuthenticated(!!token);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/task-list"
          element={
            <PrivateRoute><Tasks /></PrivateRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <PrivateRoute><Inventory /></PrivateRoute>
          }
        />
        <Route
          path="/inventory-update"
          element={
            <PrivateRoute><InventoryUpdate/></PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute><EmployeeManagement /></PrivateRoute>
          }
        />
        <Route
          path="/manage-task"
          element={
            <PrivateRoute><ManageTask /></PrivateRoute>
          }
        />
        <Route
          path="/view-checklist/:id"
          element={
            <PrivateRoute><ViewChecklist /></PrivateRoute>
          }
        />
        <Route
          path="/inventory-management"
          element={
            <PrivateRoute><InventoryManagement /></PrivateRoute>
          }
        />
       

      </Routes>
    </BrowserRouter>

  );
}

export default App;
