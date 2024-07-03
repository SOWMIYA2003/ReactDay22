// src/components/TodoItem.jsx
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, index, toggleCompletion, editTask, removeTask }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleCompletion(index)}>{task.text}</span>
      <div className="buttons">
        <button onClick={() => editTask(index)}>Edit</button>
        <button onClick={() => removeTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
