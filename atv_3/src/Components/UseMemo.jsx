import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
  const [numero, setNumero] = useState(1);

  const handleChange = (event) => {
    setNumero(Number(event.target.value));
  };

  const calcularFatorial = (n) => {
    if (n <= 1) return 1;
    return n * calcularFatorial(n - 1);
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div>
      <input 
        type="number" 
        value={numero} 
        onChange={handleChange} 
        min="0" 
      />
      <p>Fatorial de {numero} é: {fatorial}</p>
    </div>
  );
};

export default UseMemoComponent;
