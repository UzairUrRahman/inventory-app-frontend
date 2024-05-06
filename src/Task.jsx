import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      if(loading){
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
        }finally{
          setLoading(false);
        }
      }
    };

    fetchTasks();
  }, [loading]); // Empty dependency array to run the effect only once when the component mounts

  const handleTaskCheck = (checklistId, taskId, checked) => {
    if (checked) {
      setCheckedTasks(prevCheckedTasks => [...prevCheckedTasks, { checklistId, taskId, complete: true }]);
    } else {
      setCheckedTasks(prevCheckedTasks => prevCheckedTasks.filter(task => task.taskId !== taskId));
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/employee/task/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(checkedTasks)
      });
      if (!response.ok) {
        throw new Error('Failed to update task completion status');
      }
      // Reset checked tasks after successful submission
      setCheckedTasks([]);
      setLoading(true);
      // Refresh tasks data
      const updatedTasks = await response.json();
    } catch (error) {
      console.error('Error updating task completion status:', error);
    }
  };

  return (
    <>
      <Layout>
        <div className='p-5'>
          <Header />
          <br></br><h5 className='heading mt-4'>Today’s Tasks List</h5><br></br>
          {tasks?.map((taskGroup, index) => (
          <div className='card mt-4 '>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='subHeading'>{taskGroup.taskName}</h6>
              <div>
                <Button className='btnPrimary' onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
            <Row>
                <React.Fragment key={index}>
                  {taskGroup.tasks?.map(task => (
                    <Col key={task._id} className='mt-3' lg={3} md={3}>
                      <div className='d-flex align-items-center'>
                        <Form.Check
                          id={`option${task._id}`}
                          aria-label={`option ${task._id}`}
                          checked={checkedTasks.some(({ taskId }) => taskId === task._id)}
                          onChange={e => handleTaskCheck(taskGroup._id, task._id, e.target.checked)}
                        />
                        <label htmlFor={`option${task._id}`} className='paragraph ms-2'>
                          {task.title}
                        </label>
                      </div>
                    </Col>
                  ))}
                </React.Fragment>
              
            </Row>
          </div>
         ))}
        </div>
      </Layout>
    </>
  );
};

export default Tasks;
