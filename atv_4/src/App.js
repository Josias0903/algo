import React from 'react';
import { TodoProvider } from './Components/TodoContext';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Lista de Tarefas</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
