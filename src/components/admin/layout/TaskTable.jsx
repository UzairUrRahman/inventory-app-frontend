import { Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const TaskTable = ({tasks}) => {
  const [key, setKey] = useState("allTask");
  console.log({tasks})

  return (
    <>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th>Checklist Name</th>
            <th>No. of Tasks</th>
            <th>Assigned To Role</th>
            {/* <th>Assigned To Name</th> */}
            <th>Date</th>
            <th>Status</th>
            <th>View Checklist</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.taskName}</td>
                <td>{item.numberOfTasks}</td>
                <td>{item.assignRole}</td>
                {/* <td>Wilson David</td> */}
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.status}</td>
                <td className="text-center pointer">
                  <Link to={`/view-checklist/${item?._id}`} className="text-muted"><i className="fa fa-eye"></i></Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TaskTable;
