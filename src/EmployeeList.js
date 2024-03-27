import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.email}</td>
              <td>{employee.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
