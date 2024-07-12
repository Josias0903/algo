import React, { useContext, useState } from 'react';
import { BudgetContext } from './Context';

const BudgetCalculator = () => {
  const { expenses } = useContext(BudgetContext);
  const [income, setIncome] = useState('');

  const calculateBudget = () => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return (parseFloat(income) - totalExpenses).toFixed(2);
  };

  return (
    <div>
      <h2>Calculadora de Orçamento</h2>
      <div>
        <label>Renda Mensal:</label>
        <input 
          type="number" 
          value={income} 
          onChange={(e) => setIncome(e.target.value)} 
        />
      </div>
      <div>
        <h3>Orçamento Restante: R$ {calculateBudget()}</h3>
      </div>
    </div>
  );
};

export default BudgetCalculator;
