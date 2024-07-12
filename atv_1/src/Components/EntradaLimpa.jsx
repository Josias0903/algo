import React, { useRef } from 'react';

const EntradaLimpa = () => {
  const inputRef = useRef(null);

  const limparEntrada = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo..." />
      <button onClick={limparEntrada}>Limpar</button>
    </div>
  );
};

export default EntradaLimpa;
