import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import Header from "./components/layout/Header";
import Layout from "./components/admin/layout/Layout";
import InventoryTable from "./components/admin/layout/InventoryTable";

const InventoryManagement = () => {
  const [inventoryData, setInventoryData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [par, setPar] = useState('');
  const [remaining, setRemaining] = useState('');

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://api.scorerswv.com/admin/inventory`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setInventoryData(response.data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
        setError('Failed to fetch inventory data. Please try again later.');
      }
    };

    fetchInventoryData();
  }, [loading]);

  const handleCreateInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`http://api.scorerswv.com/admin/inventory`, {
        itemName,
        par,
        remaining :par
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        // Inventory created successfully, so trigger a reload of inventory data
        setLoading(!loading);
        setShowModal(false);
        setItemName("");
        setPar("");
        setRemaining("");
      } else {
        throw new Error('Failed to create inventory');
      }
    } catch (error) {
      console.error('Error creating inventory:', error);
      // Handle error
    }
  };

  return (
    <Layout>
      <div className="p-5">
        <Header />

        <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
          <div>
            <h5 className="heading mt-4">Inventory</h5>
            <p className="paragraph mb-0">
              You are now seeing the inventory, you can update the inventory and
              set the par.
            </p>
          </div>
          <Button variant="dark" onClick={() => setShowModal(true)}>Create Inventory</Button>
        </div>

        <div className="tablecard">
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {inventoryData ? (
                <InventoryTable inventoryData={inventoryData} setLoading={setLoading} loading={loading}/>
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter item name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </Form.Group><br></br>
            <Form.Group controlId="par">
              <Form.Label>Par</Form.Label>
              <Form.Control type="number" placeholder="Enter par value" value={par} onChange={(e) => setPar(e.target.value)} />
            </Form.Group><br></br>
            {/* <Form.Group controlId="remaining">
              <Form.Label>Available Stock</Form.Label>
              <Form.Control type="number" placeholder="Enter remaining value" value={remaining} onChange={(e) => setRemaining(e.target.value)} />
            </Form.Group><br></br> */} 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="dark" onClick={handleCreateInventory}>Create</Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default InventoryManagement;
