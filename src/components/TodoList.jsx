// src/components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setIsEditing(true);
    setNewTask(tasks[index].text);
    setCurrentTaskIndex(index);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setNewTask('');
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={isEditing ? updateTask : addTask}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
      <div className="tasks">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            toggleCompletion={toggleCompletion}
            editTask={editTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
