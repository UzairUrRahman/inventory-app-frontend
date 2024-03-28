import { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmployeeLogin from './employee-login';
import AdminLogin from './admin-login';
import Home from './Home';
import Tasks from './Task';
import Inventory from './Inventory';
import InventoryUpdate from './InventoryUpdate';
import ManageTask from './ManageTask'; // Corrected typo
import ViewChecklist from './ViewChecklist';
import InventoryManagement from './admin-inventory';
import EmployeeManagement from './AddEmployee';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Replace with your token key
    console.log({token});
    if (token) {
      // Perform any basic token validation here (e.g., format check)
      setIsAuthenticated(true); // Assuming basic validation passes
    }else{
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem('token')
  useEffect(() => {
    const token = localStorage.getItem('token'); // Replace with your token key
    console.log({token});
    if (token) {
      // Perform any basic token validation here (e.g., format check)
      setIsAuthenticated(true); // Assuming basic validation passes
    }else{
      setIsAuthenticated(false);
    }
  }, [token]);

  return (
    <>
      <BrowserRouter basename="/">
        <div>
          {/* Navigation (optional) */}
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-login" element={<EmployeeLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Protected routes */}
            <Route
              path="/task-list"
              element={
                isAuthenticated ? <Tasks /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/inventory"
              element={
                isAuthenticated ? <Inventory /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/inventory-update"
              element={
                isAuthenticated ? <InventoryUpdate /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <EmployeeManagement /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/manage-task"
              element={
                isAuthenticated ? <ManageTask /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/view-checklist/:id"
              element={
                isAuthenticated ? <ViewChecklist /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/inventory-management"
              element={
                isAuthenticated ? <InventoryManagement /> : <Navigate to="/" replace />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
