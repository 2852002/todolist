import React, { useState } from 'react';
import styles from './AddTask.module.css';

const AddTask = ({ addTask, editMode = false, taskToEdit = null, updateTask, cancelEditing }) => {
  const [taskText, setTaskText] = useState(taskToEdit ? taskToEdit.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    if (editMode) {
      updateTask(taskToEdit.id, taskText);
    } else {
      addTask({ id: Date.now(), text: taskText });
    }
    setTaskText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder={editMode ? 'Update task...' : 'Add a new task...'}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className={styles.button} type="submit">
        {editMode ? 'Update' : 'Add'}
      </button>
      {editMode && (
        <button type="button" className={styles.cancelButton} onClick={cancelEditing}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddTask;
