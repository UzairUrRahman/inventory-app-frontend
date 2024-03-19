import { Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const TaskTable = () => {
  const [key, setKey] = useState("allTask");

  return (
    <>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th>Checklist Name</th>
            <th>No. of Tasks</th>
            <th>Assigned To Role</th>
            <th>Assigned To Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>View Checklist</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <tr>
                <td>Checklist 01</td>
                <td>08</td>
                <td>Bartender</td>
                <td>Wilson David</td>
                <td>14/03/24</td>
                <td>Completed</td>
                <td className="text-center pointer">
                  <Link to={'/view-checklist'} className="text-muted"><i className="fa fa-eye"></i></Link>
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
