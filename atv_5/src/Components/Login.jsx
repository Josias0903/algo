import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { user, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    login(username);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Digite seu nome" 
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
