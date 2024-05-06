import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import Layout from './components/layout/Layout'
import Header from './components/layout/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newRemaining, setNewRemaining] = useState('');

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee/inventory`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setInventoryItems(response.data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchInventoryData();
  }, []);

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
  };

  const handleUpdateInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/employee/inventory/${selectedItem._id}`, {
        remaining: newRemaining
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data); // Log the response
      // Refresh inventory items
      const updatedItems = inventoryItems.map(item => {
        if (item._id === selectedItem._id) {
          return { ...item, remaining: response.data.remaining };
        }
        return item;
      });
      setInventoryItems(updatedItems);
      setSelectedItem(null);
      setNewRemaining('');
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  return (
    <Layout>
      <div className='p-5'>
        <Header />
        <h5 className='heading mt-4'>Inventory</h5>
        {inventoryItems.map(item => (
          <div key={item._id} className='card mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>{item.itemName}</h6>
              <Button className='btnPrimary' onClick={() => handleUpdateClick(item)}>Update</Button>
            </div>
            {selectedItem && selectedItem._id === item._id && (
              <div className='mt-3'>
                <Form.Group className='mb-3'>
                  <Form.Label>Remaining</Form.Label>
                  <Form.Control
                    type='number'
                    value={newRemaining}
                    onChange={(e) => setNewRemaining(e.target.value)}
                  />
                </Form.Group>
                <Button className='btnPrimary' onClick={handleUpdateInventory}>Update Inventory</Button>
              </div>
            )}
            <Row>
              <div className='d-flex align-items-center flex-wrap mt-3'>
                <label htmlFor={`option${item._id}`} className='paragraph me-3 p-2' style={{ whiteSpace: 'nowrap' }}>Remaining: {item.remaining}</label>
              </div>
            </Row>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Inventory;
