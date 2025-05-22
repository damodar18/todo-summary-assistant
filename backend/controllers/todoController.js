const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add todo
exports.addTodo = async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).json({ error: 'Todo text is required' });
    }

    const newTodo = new Todo({
      text: req.body.text,
      completed: false
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Could not create todo' });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text, completed },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
