import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import styles from './App.module.css';
import { saveTasks, loadTasks } from './services/storage';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks() || []);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>To-Do List with Edit Feature</h1>
      {!editingTask && <AddTask addTask={addTask} />}
      {editingTask && (
        <AddTask
          editMode
          taskToEdit={editingTask}
          updateTask={updateTask}
          cancelEditing={cancelEditing}
        />
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} startEditing={startEditing} />
    </div>
  );
};

export default App;
