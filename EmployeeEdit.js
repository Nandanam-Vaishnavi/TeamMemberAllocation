import React, { useState } from 'react';


const EmployeeEdit = ({ initialDesignation, onSave, onCancel }) => {
  const [editedDesignation, setEditedDesignation] = useState(initialDesignation);

  const handleSave = () => {
    onSave(editedDesignation);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleInputChange = (event) => {
    setEditedDesignation(event.target.value);
  };

  return (
    <div>
      <label>
        Edit Designation:
        <input type="text" value={editedDesignation} onChange={handleInputChange} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EmployeeEdit;