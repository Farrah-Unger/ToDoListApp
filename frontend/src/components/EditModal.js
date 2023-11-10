import React, { useState } from 'react';


const EditModal = ({ isOpen, closeModal, handleEditTask }) => {
  const [newTitle, setNewTitle] = useState('');

  const handleSave = () => {
    handleEditTask(newTitle);
    closeModal();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input
          type="text"
          placeholder="Enter new title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
