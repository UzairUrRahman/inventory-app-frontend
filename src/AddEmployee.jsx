import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import AddEmployeeModal from './AddEmployeeModal'; // Import the AddEmployeeModal component
import Header from './components/layout/Header'; // Assuming you have a Header component
import Layout from './components/admin/layout/Layout'; // Assuming you have a Layout component
import axios from 'axios';

const EmployeeManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEmployees(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);


  return (
    <Layout>
      <div className="p-5">
        <Header />
        
        <div className="d-flex justify-content-between mb-3">
          <h5 className="heading my-4">Employee Management</h5>
          <Button onClick={handleShowModal}  className="btn-dark my-4">Create Employee</Button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEmployeeModal handleClose={handleCloseModal} /> {/* Pass handleClose function as a prop */}
          </Modal.Body>
        </Modal>
        
        {/* Other content of the EmployeeManagement component */}

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            ) : (
              employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.email}</td>
                  <td>{employee.category}</td>
                  <td>{new Date(employee.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default EmployeeManagement;
