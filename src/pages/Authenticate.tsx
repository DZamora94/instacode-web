import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

export const AuthenticatePage = () => {
  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    register({
      username: 'DavidTest3',
      email: 'davidtest3@gmail.com',
      password: 'qweQWE$12',
      emoji: '🐆'
    });
  };

  return (
    <div>
      <h1>Authenticate</h1>

      <button onClick={handleRegister}>Register!</button>
    </div>
  );
};
