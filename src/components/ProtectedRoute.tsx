import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
