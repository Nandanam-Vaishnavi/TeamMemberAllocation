// import React from 'react';

// const EmployeeProfile = ({ employees, onBackClick, onEditClick }) => {
//   if (!employees || employees.length === 0) {
//     return <p>No employee data available.</p>;
//   }

//   const employee = employees[0];

//   return (
//     <div>
//       <h2>Employee Profile</h2>
//       <p>fullName: {employee.fullName}</p>
//       <p>designation: {employee.designation}</p>

//       <button onClick={onBackClick}>Back to Main View</button>
//       <button onClick={onEditClick}>Edit Profile</button>
//     </div>
//   );
// };

// export default EmployeeProfile;

import React, { useState } from 'react';

const EmployeeProfile = ({ employees, onBackClick, updateEmployeeDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDesignation, setEditedDesignation] = useState(employees[0].designation);

  const handleEditClick = () => {
    setEditedDesignation(employees[0].designation);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    if (employees.length > 0) {
      const updatedEmployee = { ...employees[0], designation: editedDesignation };
      if (updateEmployeeDetails) {
        updateEmployeeDetails(updatedEmployee);
      }

      console.log("Updated Employee:", updatedEmployee);
    }

    setIsEditing(false);
  };

  return (
    <div>
      <h2>Employee Profile</h2>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.fullName}</h3>
          <p>
            Designation: {isEditing ? (
              <input
                name="designation"
                value={editedDesignation}
                onChange={(e) => setEditedDesignation(e.target.value)}
              />
            ) : (
              employee.designation
            )}
          </p>
          <p>Gender: {employee.gender}</p>
          <p>Team Name: {employee.teamName}</p>

          {isEditing ? (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
          <hr />
        </div>
      ))}

      {/* <button onClick={onBackClick}>Back to Main View</button> */}
    </div>
  );
};

export default EmployeeProfile;
