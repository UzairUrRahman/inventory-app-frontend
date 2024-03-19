
import { Button, Image, Modal, Row } from 'react-bootstrap';
import Layout from './components/layout/Layout'
import Header from './components/layout/Header';
import { useState } from 'react';
import Tick from './assets/img/Tick.svg'

const InventoryUpdate = () => {
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Layout>
        <div className='p-5'>
          <Header />
          <h5 className='heading mt-4'>Update Alcoholic Beverages</h5>
          <p className='paragraph'>You are allowed to update the inventory as per your use of the alcoholic beverages.</p>

          <div className='card  mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>Inventory 01</h6>
              <div>
                <Button className='btnPrimary' onClick={handleShow}>Update Inventory</Button>
              </div>
            </div>

            <Row>
              <div className='d-flex align-items-center flex-wrap'>
                <label htmlFor={`option1`} className='paragraph me-3 p-2' style={{ whiteSpace: 'nowrap' }}>Inventory 01</label>
              </div>
                <div className='d-flex align-items-center mt-2 mx-2'>
                  <div className='add'  onClick={()=>setQuantity(quantity+1)}>+</div>
                  <div className='addQuantity'>{quantity}</div>
                  <div className='add' onClick={()=>setQuantity(quantity-1)}>-</div>
                </div>
            </Row>
          </div>
          <div className='card  mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>Inventory 02</h6>
              <div>
                <Button className='btnPrimary' onClick={handleShow}>Update Inventory</Button>
              </div>
            </div>

            <Row>
              <div className='d-flex align-items-center flex-wrap'>
                <label htmlFor={`option1`} className='paragraph me-3 p-2' style={{ whiteSpace: 'nowrap' }}>Inventory 01</label>
              </div>
                <div className='d-flex align-items-center mt-2 mx-2'>
                  <div className='add'  onClick={()=>setQuantity(quantity+1)}>+</div>
                  <div className='addQuantity'>{quantity}</div>
                  <div className='add' onClick={()=>setQuantity(quantity-1)}>-</div>
                </div>
            </Row>
          </div>


        </div>
      </Layout>
      <Modal centered show={show} onHide={handleClose}>
                <Modal.Header className='border-bottom-0' closeButton>
                </Modal.Header>
                <Modal.Body className='text-center p-4'>

                    <div className='position-relative'>
                        <Image src={Tick} alt='' className='img-fluid my-3' width={120} height={120} />
                       
                    </div>
                <Modal.Title style={{fontSize: '18px'}}>
                  <strong>Inventory Updated!</strong>
                </Modal.Title>
                    <p className='paragraph my-3'>The image dimension should be xyz.</p>
                    <div className='d-flex mt-4 align-items-center'>
                        <Button className='btnPrimaryOutline w-100' onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
    </>
  );
};

export default InventoryUpdate;
