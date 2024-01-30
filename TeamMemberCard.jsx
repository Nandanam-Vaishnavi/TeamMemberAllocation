// import Female from './images/Female.jpg.jpg';
// import male from './images/male.jpg.jpg';

// const TeamMemberCard =  ({employee, handleEmployeeCardClick, selectedTeam }) => {
//     return(
//         <div key= {employee.id} id= {employee.id} className = {(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
//                         {(employee.gender==='male')?<img src={male} className="card-img-top" />
//                         :<img src={Female} className="card-img-top" />}
//                     <div className="card-body">
//                         <h5 className = "card-title">Full Name: {employee.fullName}</h5>
//                         <p className="card-text"><b>Designation:</b>{employee.designation} </p>
//                         </div>
//                         </div>
//     )
// }

// export default TeamMemberCard;


// import React, { useState } from 'react';
// import Female from './images/Female.jpg.jpg';
// import Male from './images/male.jpg.jpg';

// const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedDesignation, setEditedDesignation] = useState(employee.designation);

//   const handleEditClick = (event) => {
//     event.stopPropagation(); // Prevents the click event from reaching the outer div and triggering handleEmployeeCardClick
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Save the edited designation and exit edit mode
//     // You can add logic to update the state or perform any necessary actions
//     setIsEditing(false);
//     // Example: call a function to update the designation in the parent component
//     handleEmployeeCardClick({ ...employee, designation: editedDesignation });
//   };

//   const handleCancelClick = () => {
//     // Discard changes and exit edit mode
//     setIsEditing(false);
//     setEditedDesignation(employee.designation); // Reset edited designation to current designation
//   };

//   const handleInputChange = (event) => {
//     setEditedDesignation(event.target.value);
//   };

//   return (
//     <div
//       key={employee.id}
//       id={employee.id}
//       className={employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'}
//       style={{ cursor: 'pointer' }}
//       onClick={handleEmployeeCardClick}
//     >
//       {isEditing ? (
//         // Display input field in edit mode
//         <div className="card-body">
//           <input
//             type="text"
//             value={editedDesignation}
//             onChange={handleInputChange}
//             className="form-control mb-2"
//           />
//           <button className="btn btn-primary btn-sm mr-2" onClick={handleSaveClick}>
//             Save
//           </button>
//           <button className="btn btn-secondary btn-sm" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       ) : (
//         // Display card content
//         <>
//           {employee.gender === 'male' ? (
//             <img src={Male} className="card-img-top" alt="Male" />
//           ) : (
//             <img src={Female} className="card-img-top" alt="Female" />
//           )}
//           <div className="card-body">
//             <h5 className="card-title">Full Name: {employee.fullName}</h5>
//             <p className="card-text">
//               <b>Designation:</b> {employee.designation}{' '}
//               <button className="btn btn-link btn-sm" onClick={handleEditClick}>
//                 Edit
//               </button>
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TeamMemberCard;


// TeamMemberCard.js
// TeamMemberCard.js

// import React, { useState } from 'react';
// import Female from './images/Female.jpg.jpg';
// import Male from './images/male.jpg.jpg';
// import EmployeeEdit from './EmployeeEdit';

// const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
//     const [isEditing, setIsEditing] = useState(false);
  
//     const handleEditClick = (event) => {
//       event.stopPropagation();
//       setIsEditing(true);
//     };
  
//     const handleSaveEdit = (editedDesignation) => {
//       // Check if 'employee' is defined before updating
//       if (employee && employee.id) {
//         // Handle the save action (e.g., update state in the parent component)
//         setIsEditing(false);
//         // Update the designation in the parent component's state
//         handleEmployeeCardClick({ ...employee, designation: editedDesignation });
//       }
//     };
  
//     const handleCancelEdit = () => {
//       // Handle the cancel action
//       setIsEditing(false);
//     };
  
//     return (
//       <div
//         key={employee.id}
//         id={employee.id}
//         className={employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'}
//         style={{ cursor: 'pointer' }}
//         onClick={() => handleEmployeeCardClick(employee)}
//       >
//         {isEditing ? (
//           <EmployeeEdit
//             initialDesignation={employee.designation}
//             onSave={handleSaveEdit}
//             onCancel={handleCancelEdit}
//           />
//         ) : (
//           <>
//             {employee.gender === 'male' ? (
//               <img src={Male} className="card-img-top" alt="Male" />
//             ) : (
//               <img src={Female} className="card-img-top" alt="Female" />
//             )}
//             <div className="card-body">
//               <h5 className="card-title">Full Name: {employee.fullName}</h5>
//               <p className="card-text">
//                 <b>Designation:</b> {employee.designation}{' '}
//                 <button className="btn btn-link btn-sm" onClick={handleEditClick}>
//                   View Profile
//                 </button>
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     );
//   };
  
//   export default TeamMemberCard;
  
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Female from './images/Female.jpg.jpg';
import Male from './images/male.jpg.jpg';
import EmployeeEdit from './EmployeeEdit'; // Assuming this is your edit component
import EmployeeProfile from './EmployeeProfile'; // Change this import to the actual profile component
import Nav from './nav';

const TeamMemberCard = ({ employee, selectedTeam, handleUpdateEmployee}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isViewProfileMode, setIsViewProfileMode] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleViewProfileClick = () => {
    // Navigate to the employee profile route with the employee's ID
    navigate(`/EmployeeProfile`);
    setIsViewProfileMode(true);
  };

  const handleSaveEdit = (editedDesignation) => {
    // Handle the save action (e.g., update state in the parent component)
    setIsEditing(false);
    // Update the designation in the parent component's state
    // Assuming you have a function to handle this, replace it with the actual function
    handleUpdateEmployee({ ...employee, designation: editedDesignation });
  };

  const handleCancelEdit = () => {
    // Handle the cancel action
    setIsEditing(false);
  };

  return (
    <div
      key={employee.id}
      id={employee.id}
      className={employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'}
      style={{ cursor: 'pointer' }}
      onClick={() => setIsViewProfileMode(false)}
    >
      {isEditing ? (
        <EmployeeEdit
          initialDesignation={employee.designation}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          {employee.gender === 'male' ? (
            <img src={Male} className="card-img-top" alt="Male" />
          ) : (
            <img src={Female} className="card-img-top" alt="Female" />
          )}
          <div className="card-body">
            <h5 className="card-title">Full Name: {employee.fullName}</h5>
            <p className="card-text">
              <b>Designation:</b> {employee.designation}{' '}
              {!isViewProfileMode && (
                <>
        
                  <button className="btn btn-link btn-sm" onClick={handleViewProfileClick}>
                    View Profile
                  </button>
                </>
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMemberCard;
