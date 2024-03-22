import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/employee/task`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array to run the effect only once when the component mounts

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
              {tasks.map((taskGroup, index) => (
                <Col key={index} className='mt-3' lg={3}>
                  {taskGroup.tasks.map((task, taskIndex) => (
                    <div key={task._id} className='d-flex align-items-center'>
                      <Form.Check
                        id={`option${index + 1}-${taskIndex + 1}`}
                        aria-label={`option ${index + 1}`}
                        checked={task.completed}
                      />
                      <label htmlFor={`option${index + 1}-${taskIndex + 1}`} className='paragraph ms-2'>
                        {task.title}
                      </label>
                    </div>
                  ))}
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
