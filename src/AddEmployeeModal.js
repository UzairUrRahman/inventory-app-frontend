import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const AddEmployeeModal = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/employee/register`, {
        email,
        password,
        category
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data); // Handle success response
      alert(response.data.message)
      handleClose();
    } catch (error) {
        // alert(error.response.data.message);
      console.error('Error adding employee:');
      if(error.response.data?.errors?.length > 0) {
        setError(error.response.data?.errors[0].message);
      }else if(error.response.data.message){ 
        setError(error.response.data.message);
    }else{

        setError('Failed to add employee. Please try again.');
    }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category:</Form.Label>
          <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="cook">Cook</option>
            <option value="bartender">Bartender</option>
          </Form.Control>
        </Form.Group>
        <Button variant="dark" className="my-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddEmployeeModal;
