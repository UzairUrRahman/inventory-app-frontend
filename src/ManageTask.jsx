
import { Button, Col, Form, Image, Row, Tab, Table, Tabs } from 'react-bootstrap';
import Header from './components/layout/Header';
import { Link } from 'react-router-dom';
import Layout from './components/admin/layout/Layout';
import { useState } from 'react';
import TaskTable from './components/admin/layout/TaskTable';
const ManageTaske = () => {
  const [key, setKey] = useState('allTask');

  return (

    <>
      <Layout>
        <div className='p-5'>
          <Header />

          <div className='d-flex align-items-center justify-content-between mt-4 mb-3'>
            <div><h5 className='heading mt-4'>Manage Tasks</h5>
              <p className='paragraph mb-0'>You’ve logged as an admin, please take a look at the below tasks assigned by you to your employees.</p></div>
            <div>
              <Button className='btnPrimary'>Create New Task</Button>
            </div>
          </div>


          <div className=''>
            <div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 border-0"
              >
                <Tab eventKey="allTask" title="All Tasks">
                  <div className='tablecard'>
                    <TaskTable />
                  </div>
                </Tab>
                <Tab eventKey="completedTask" title="Completed Tasks">
                <div className='tablecard'>
                    <TaskTable />
                  </div>
                </Tab>
                <Tab eventKey="pendingTask" title="Pending Tasks">
                <div className='tablecard'>
                    <TaskTable />
                  </div>
                </Tab>
                <Tab eventKey="incompleteTask" title="Incomplete Tasks">
                <div className='tablecard'>
                    <TaskTable />
                  </div>
                </Tab>
              </Tabs>
            </div>

          </div>


        </div>
      </Layout>
    </>
  );
};


export default ManageTaske;
