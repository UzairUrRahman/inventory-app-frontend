import { Button, Col, Container, Form, Image } from "react-bootstrap";
import "./App.css";
import Logo from "./assets/img/checklistLogo.svg";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import EmployeeLogin from "./employee-login";
import AdminLogin from "./admin-login";
import Home from "./Home";
import Tasks from "./Task";
import Inventory from "./Inventory";
import InventoryUpdate from "./InventoryUpdate";
import ManageTaske from "./ManageTask";
import ViewCheklist from "./ViewChecklist";
import InventoryManagement from "./admin-inventory";

function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/employee-login" element={<EmployeeLogin/>} />
          <Route path="/admin-login" element={<AdminLogin/>} />
          <Route path="/task-list" element={<Tasks/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/inventory-update" element={<InventoryUpdate/>} />
          <Route path="/manage-task" element={<ManageTaske/>} />
          <Route path="/view-checklist" element={<ViewCheklist/>} />
          <Route path="/inventory-management" element={<InventoryManagement/>} />
        </Routes>
      </div>
    </BrowserRouter>

      
    </>
  );
}

export default App;
