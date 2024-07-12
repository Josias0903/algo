import React, { useContext } from 'react';
import { BudgetContext } from './Context';

const ExpenseList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div>
      <h2>Lista de Despesas</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: R$ {expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
