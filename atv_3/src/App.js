import React from 'react';
import ReactDOM from 'react-dom';
import UseMemoComponent from './Components/UseMemo';

const App = () => {
  return (
    <div>
      <h1>Calculadora de Fatorial</h1>
      <UseMemoComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App; 