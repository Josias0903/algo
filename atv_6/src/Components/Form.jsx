import React, { useState, useContext } from 'react';
import { BudgetContext } from './Context';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div>
        <label>Valor:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default ExpenseForm;
