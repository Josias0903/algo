import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Nova tarefa" 
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
