import React from 'react';
import ReactDOM from 'react-dom';
import EntradaLimpa from './Components/EntradaLimpa';

const App = () => {
  return (
    <div>
      <h1>Componente de Entrada com Limpeza</h1>
      <EntradaLimpa />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
