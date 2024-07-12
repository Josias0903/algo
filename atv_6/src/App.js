import React from 'react';
import { BudgetProvider } from './Components/Context';
import Balance from './Components/Saldo';
import ExpenseForm from './Components/Form';
import ExpenseList from './Components/List';
import BudgetCalculator from './Components/Calculadora';

const App = () => {
  return (
    <BudgetProvider>
      <div className="container">
        <h1>Gerenciamento de Orçamento Pessoal</h1>
        <Balance />
        <ExpenseForm />
        <ExpenseList />
        <BudgetCalculator />
      </div>
    </BudgetProvider>
  );
};

export default App;
