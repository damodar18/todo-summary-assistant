import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo'; // 👈 No curly braces
import TodoList from './components/TodoList';
import SummaryButton from './components/SummaryButton';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo Summary Assistant</h1>
      <AddTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <TodoList
        todos={todos}
        onDelete={(id) => setTodos(todos.filter((t) => t._id !== id))}
        onUpdate={(updatedTodo) =>
        setTodos((prev) =>
          prev.map((t) => (t._id === updatedTodo._id ? updatedTodo : t))
        )
        }
      />
      <SummaryButton />
    </div>
  );
}

export default App;