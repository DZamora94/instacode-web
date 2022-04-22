import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

export const AuthenticatePage = () => {
  const { login } = useContext(AuthContext);

  const handleRegister = () => {
    login({
      email: 'davidtest5@gmail.com',
      password: 'qweQWE$12'
    });
  };

  return (
    <div>
      <h1>Authenticate</h1>

      <button onClick={handleRegister}>Register!</button>
    </div>
  );
};
