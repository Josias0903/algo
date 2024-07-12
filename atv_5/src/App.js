import React from 'react';
import { UserProvider } from './Components/UserContext';
import Login from './Components/Login';
import UserInfo from './Components/UserInfo';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Aplicação de Login</h1>
        <Login />
        <UserInfo />
      </div>
    </UserProvider>
  );
};

export default App;
