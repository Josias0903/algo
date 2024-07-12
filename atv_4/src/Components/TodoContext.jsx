import React, { createContext, useState, useCallback } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((task) => {
    setTodos((prevTodos) => [...prevTodos, { task, id: Date.now() }]);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
