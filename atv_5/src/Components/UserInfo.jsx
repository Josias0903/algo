import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <p>Informações do usuário: {user.username}</p>
      ) : (
        <p>Por favor, faça login.</p>
      )}
    </div>
  );
};

export default UserInfo;
