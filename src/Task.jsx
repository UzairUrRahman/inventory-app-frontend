
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import Layout from './components/layout/Layout'
import Header from './components/layout/Header';
const Tasks = () => {
  const array = new Array(10).fill(null);
  return (
    <>
      <Layout>
        <div className='p-5'>
          <Header />
          <h5 className='heading mt-4'>Today’s Tasks List</h5>
          <p className='paragraph'>You’ve logged in with your bartender profile, please check the below tasks assigned to you by the admin.</p>

          <div className='card'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>Date: 13-03-2024</h6>
              <div>
                <Button className='btnPrimary'>Submit</Button>
              </div>
            </div>

            <Row>
              {array.map((_, index) => (
                <Col key={index} className='mt-3' lg={3}>
                  <div className='d-flex align-items-center'>
                    <Form.Check id={`option${index + 1}`} aria-label={`option ${index + 1}`} />
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

export default Tasks;
