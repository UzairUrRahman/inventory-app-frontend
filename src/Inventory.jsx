
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import Layout from './components/layout/Layout'
import Header from './components/layout/Header';
import { Link } from 'react-router-dom';
const Inventory = () => {
  const array = new Array(10).fill(null);
  return (
    <>
      <Layout>
        <div className='p-5'>
          <Header />
          <h5 className='heading mt-4'>Inventory</h5><br></br>
          <div className='card  mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>Alcoholic Beverages</h6>
              <Link to={'/inventory-update'}>
                <Button className='btnPrimary'>Update</Button>
              </Link>
            </div>

            <Row>
              <div className='d-flex align-items-center flex-wrap mt-3'>
                {array.map((_, index) => (
                  <label htmlFor={`option${index + 1}`} className='paragraph me-3 p-2' style={{ whiteSpace: 'nowrap' }}>Inventory {index + 1}</label>
                ))}
              </div>
            </Row>
          </div>



          <div className='card mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>Mixers and Non-Alcoholic Beverages</h6>
              <Link to={'/inventory-update'}>
                <Button className='btnPrimary'>Update</Button>
              </Link>
            </div>

            <Row>
              <div className='d-flex align-items-center flex-wrap mt-3'>
                {array.map((_, index) => (
                  <label htmlFor={`option${index + 1}`} className='paragraph me-3 p-2' style={{ whiteSpace: 'nowrap' }}>Inventory {index + 1}</label>
                ))}
              </div>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Inventory;
