import { Button, Form, Modal, Tab, Tabs } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Layout from './components/admin/layout/Layout';
import TaskTable from './components/admin/layout/TaskTable';
import axios from 'axios';

const ManageTasks = () => {
  const [tasks, setTasks] = useState({
    allTasks: [],
    completedTasks: [],
    incompleteTasks: []
  });

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [assignRole, setAssignRole] = useState('cook');
  const [taskInputs, setTaskInputs] = useState(['']);

  const handleCloseModal = () => {
    setShowModal(false);
    setTaskName('');
    setAssignRole('cook');
    setTaskInputs(['']);
  };

  const handleAddTaskInput = () => {
    setTaskInputs([...taskInputs, '']);
  };

  const handleRemoveTaskInput = (index) => {
    const updatedInputs = [...taskInputs];
    updatedInputs.splice(index, 1);
    setTaskInputs(updatedInputs);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const payload = {
        taskName,
        assignRole,
        tasks: taskInputs.map(task => ({ title: task.trim() }))
      };

      const response = await axios.post(`http://api.scorerswv.com/admin/task`, payload, config);
      if (response.status === 201) {
        setTasks({
          ...tasks,
          allTasks: [...tasks.allTasks, response.data]
        });
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const allTasksPromise = axios.get(`http://api.scorerswv.com/admin/task`, config);
        const completedTasksPromise = axios.get(`http://api.scorerswv.com/admin/task?status=completed`, config);
        const incompleteTasksPromise = axios.get(`http://api.scorerswv.com/admin/task?status=incomplete`, config);

        const [allTasksResponse, completedTasksResponse, incompleteTasksResponse] = await Promise.all([
          allTasksPromise,
          completedTasksPromise,
          incompleteTasksPromise
        ]);

        setTasks({
          allTasks: allTasksResponse.data,
          completedTasks: completedTasksResponse.data,
          incompleteTasks: incompleteTasksResponse.data
        });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);
  
  return (
    <Layout>
      <div className='p-5'>
        <Header />

        <div className='d-flex align-items-center justify-content-between mt-4 mb-3'>
          <div>
            <h5 className='heading mt-4'>Manage Tasks</h5>
            <p className='paragraph mb-0'>You have logged in as an Admin. Feel free to add checklist and update the inventory.</p><br></br>
          </div>
          <div>
            <Button className='btnPrimary' onClick={() => setShowModal(true)}>Create New Task</Button>
          </div>
        </div>

        <div className=''>
          <div>
            <Tabs
              id='controlled-tab-example'
              defaultActiveKey='allTasks'
              className='mb-3 border-0'
            >
              <Tab eventKey='allTasks' title='All Tasks'>
                <div className='tablecard'>
                  <TaskTable tasks={tasks.allTasks} />
                </div>
              </Tab>
              <Tab eventKey='completedTasks' title='Completed Tasks'>
                <div className='tablecard'>
                  <TaskTable tasks={tasks.completedTasks} />
                </div>
              </Tab>
              <Tab eventKey='incompleteTasks' title='Incomplete Tasks'>
                <div className='tablecard'>
                  <TaskTable tasks={tasks.incompleteTasks} />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='taskName'>
              <Form.Label>Checklist Name</Form.Label>
              <Form.Control type='text' placeholder='Enter checklist name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            </Form.Group><br></br>
            <Form.Group controlId='assignRole'>
              <Form.Label>Assign Role</Form.Label>
              <Form.Control as='select' value={assignRole} onChange={(e) => setAssignRole(e.target.value)}>
                <option value='cook'>Cook</option>
                <option value='bartender'>Bartender</option>
              </Form.Control>
            </Form.Group><br></br>
            <Form.Group controlId='taskInputs'>
              <Form.Label>Tasks</Form.Label>
              {taskInputs.map((task, index) => (
                <div key={index} className='d-flex align-items-center'>
                  <Form.Control type='text' placeholder='Enter task' value={task} onChange={(e) => {
                    const updatedInputs = [...taskInputs];
                    updatedInputs[index] = e.target.value;
                    setTaskInputs(updatedInputs);
                  }} />
                  <Button variant='danger' className='ms-2' onClick={() => handleRemoveTaskInput(index)}>Remove</Button>
                </div>
              ))}
              <br></br>
              <Button variant='secondary mt-2' onClick={handleAddTaskInput}>Add New Task</Button>
            </Form.Group><br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>Cancel</Button>
          <Button variant='primary' onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default ManageTasks;
