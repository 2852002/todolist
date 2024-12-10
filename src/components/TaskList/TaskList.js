import React from 'react';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, startEditing }) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          <span>{task.text}</span>
          <div className={styles.buttons}>
            <button
              className={styles.editButton}
              onClick={() => startEditing(task)}
            >
              Edit
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
