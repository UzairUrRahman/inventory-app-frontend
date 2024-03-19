
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import Layout from './components/admin/layout/Layout';
import Header from './components/layout/Header';
const ViewCheklist = () => {
  const array = new Array(10).fill(null);
  return (
    <>
      <Layout>
        <div className='p-5'>
          <Header />
          <h5 className='heading mt-4'>Checklist 01</h5>
          <p className='paragraph'>You are now seeing the details of checklist 01.</p>

          <div className='card'>
            <div className='d-flex align-items-center justify-content-between mb-1'>
              <h6 className='subHeading'>Assigned To Role:</h6>
             <div className='paragraph'>Bartender</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mb-1'>
              <h6 className='subHeading'>Assigned To Name:</h6>
             <div className='paragraph'>Wilson David</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mb-1'>
              <h6 className='subHeading'>Status:</h6>
             <div className='paragraph'>Completed</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mb-2'>
              <h6 className='subHeading'>Submission Date:</h6>
             <div className='paragraph'>14/03/24</div>
            </div>

            <Row className='border-top'>
              {array.map((_, index) => (
                <Col key={index} className='mt-3' lg={3}>
                  <div className='d-flex align-items-center'>
                    <Form.Check id={`option${index + 1}`} checked aria-label={`option ${index + 1}`} />
                    <label htmlFor={`option${index + 1}`} className='paragraph ms-2'>Lorem Ipsum Task List {index + 1}</label>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ViewCheklist;
