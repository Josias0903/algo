import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.amount);
  };

  return (
    <BudgetContext.Provider value={{ expenses, balance, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
