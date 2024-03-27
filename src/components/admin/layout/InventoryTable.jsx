import { Button, Form, Modal, Table } from "react-bootstrap";
import { useState } from "react";

const InventoryTable = ({ inventoryData , setLoading, loading}) => {
  const [show, setShow] = useState(false);
  const [par, setPar] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
    setError(null);
  };

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
    setPar(item.par || 0);
    setRemaining(item.remaining || 0);
  };

  const updateInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/inventory/${selectedItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ par, remaining })
      });

      if (!response.ok) {
        throw new Error('Failed to update inventory');
      }
      setLoading(!loading)
      handleClose();
    } catch (error) {
      console.error('Error updating inventory:', error);
      setError('Failed to update inventory. Please try again later.');
    }
  };

  const handleUpdateInventory = () => {
    if (par < 0) {
      setError('Par cannot be less than 0.');
      return;
    }

    if (remaining > par || remaining < 0) {
      setError('Remaining quantity must be greater than or equal to 0 and less than or equal to Par.');
      return;
    }

    updateInventory();
  };

  return (
    <>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th style={{ width: "150px" }}>Item Name</th>
            <th style={{ width: "150px" }}>Par</th>
            <th style={{ width: "150px" }}>Available Stock</th>
            <th style={{ width: "150px" }}>order</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.par}</td>
              <td>{item.remaining}</td>
              <td>{item.order}</td>
              <td className="pointer">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button className="btnPrimaryOutline me-2" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }} onClick={() => handleShow(item)}>
                    Update Inventory
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form.Group className="mb-3">
            <Form.Label>Par</Form.Label>
            <Form.Control type="number" value={par} onChange={(e) => setPar(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Available Stock</Form.Label>
            <Form.Control type="number" value={remaining} onChange={(e) => setRemaining(e.target.value)} />
          </Form.Group>
          <div className="d-flex align-items-center mt-4">
            <Button className="btnPrimaryOutline w-100 me-2" onClick={handleClose}>Cancel</Button>
            <Button className="btnPrimary w-100 ms-2" onClick={handleUpdateInventory}>Update Inventory</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InventoryTable;
