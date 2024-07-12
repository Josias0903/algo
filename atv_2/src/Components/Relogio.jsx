import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Mostra a mensagem por 5 segundos
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    // Limpa os intervalos e timeouts quando o componente é desmontado
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
      {showMessage && <p>Esta mensagem desaparecerá após 5 segundos</p>}
    </div>
  );
};

export default Relogio;
