import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import Layout from './components/admin/layout/Layout';
import Header from './components/layout/Header';

const ViewChecklist = () => {
  const [checklist, setChecklist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://api.scorerswv.com/admin/task/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch checklist');
        }
        const data = await response.json();
        setChecklist(data);
      } catch (error) {
        console.error('Error fetching checklist:', error);
      }
    };

    fetchChecklist();
  }, [id]); // Dependency array with id so that useEffect re-runs when id changes

  return (
    <Layout>
      <div className='p-5'>
        <Header />
        {checklist ? (
          <>
            <h5 className='heading mt-4'>Checklist  {checklist.taskName}</h5>
            <p className='paragraph'>You are now seeing the details of checklist {checklist.taskName}.</p>

            <div className='card'>
              <div className='d-flex align-items-center justify-content-between mb-1'>
                <h6 className='subHeading'>Assigned To Role:</h6>
                <div className='paragraph'>{checklist.assignRole}</div>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-1'>
                <h6 className='subHeading'>Status:</h6>
                <div className='paragraph'>{checklist.status}</div>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-2'>
                <h6 className='subHeading'>Submission Date:</h6>
                <div className='paragraph'>{new Date(checklist.createdAt).toLocaleDateString()}</div>
              </div>

              <Row className='border-top'>
                {checklist.tasks.map((task, index) => (
                  <Col key={index} className='mt-3' lg={3}>
                    <div className='d-flex align-items-center'>
                      <Form.Check id={`option${index + 1}`} checked={task.completed} aria-label={`option ${index + 1}`} />
                      <label htmlFor={`option${index + 1}`} className='paragraph ms-2'>{task.title}</label>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default ViewChecklist;
