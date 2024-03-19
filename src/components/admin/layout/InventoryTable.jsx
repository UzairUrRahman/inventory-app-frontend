import { Button, Form, Modal, Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const InventoryTable = () => {
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowInventory = () => setShowInventory(true);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th style={{ width: "150px" }}>Sr. No</th>
            <th style={{ width: "150px" }}>Item Name</th>
            <th style={{ width: "150px" }}>Par</th>
            <th style={{ width: "150px" }}>Remaining</th>
            <th style={{ width: "450px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <tr>
                <td>01</td>
                <td>Club Soda</td>
                <td>100</td>
                <td>66 </td>
                <td className="pointer">
                  <Button
                    className="btnPrimaryOutline me-2"
                    onClick={handleShow}
                  >
                    Update Par
                  </Button>
                  <Button
                    className="btnPrimaryOutline"
                    onClick={handleShowInventory}
                  >
                    Update Inventory
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal size="md" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Par</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <p className="paragraph">
            The recent par set for Club Soda is 100, you can update this
            quantity and set a new par below.
          </p>
          <Form.Control type="number" placeholder="100" />
          <div className="d-flex align-items-center mt-4">
            <Button
              className="btnPrimaryOutline w-100 me-2"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button className="btnPrimary w-100 ms-2" onClick={handleClose}>
              Update Par
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal centered show={showInventory} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Par</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <p className="paragraph">You can update Club Soda inventory below.</p>

          <p className="paragraph">
            Below is the amount according to the last update.
          </p>

          <div className="d-flex align-items-center mt-2 mx-2">
            <div className="add" onClick={() => setQuantity(quantity + 1)}>
              +
            </div>
            <div className="addQuantity">{quantity}</div>
            <div className="add" onClick={() => setQuantity(quantity - 1)}>
              -
            </div>
          </div>

          <div className="d-flex align-items-center mt-4">
            <Button
              className="btnPrimaryOutline w-100 me-2"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button className="btnPrimary w-100 ms-2" onClick={handleClose}>
              Update Inventory{" "}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InventoryTable;
