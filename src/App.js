import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    } else {
      fetch('http://assets.breatheco.de/apis/fake/todos/user/johndoe')
        .then(response => response.json())
        .then(data => setTodos(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    if (inputValue) {
      const newTodo = {
        label: inputValue,
        done: false,
        id: todos.length + 1
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '50%', border: '1px solid gray', borderRadius: '5px', padding: '20px' }}>
        <h1>To-Do App</h1>
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Add a to-do item" value={inputValue} onChange={event => setInputValue(event.target.value)} />
          <button type="submit">Add</button>
        </form>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid gray', borderRadius: '5px' }}>
              {todo.label}
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

