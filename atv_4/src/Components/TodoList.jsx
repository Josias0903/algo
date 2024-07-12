import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
