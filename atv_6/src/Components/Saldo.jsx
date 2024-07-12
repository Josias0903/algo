import React, { useContext } from 'react';
import { BudgetContext } from './Context';

const Balance = () => {
  const { balance } = useContext(BudgetContext);
  
  return (
    <div>
      <h2>Saldo: R$ {balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
