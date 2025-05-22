import React, { useState } from 'react';
import axios from 'axios';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      onDelete(id);
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
        text: editText,
      });
      onUpdate(res.data); // update in App state
      setEditingId(null);
      setEditText('');
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo._id} className="todo-item">
          {editingId === todo._id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div className="action-buttons">
                <button onClick={() => handleUpdate(todo._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <div className="action-buttons">
                <button
                  onClick={() => {
                    setEditingId(todo._id);
                    setEditText(todo.text);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(todo._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
