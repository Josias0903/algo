import React from 'react';
import ReactDOM from 'react-dom';
import Relogio from './Components/Relogio';

const App = () => {
  return (
    <div>
      <h1>Relógio em Tempo Real</h1>
      <Relogio />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
