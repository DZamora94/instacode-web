import axios from 'axios';
import { createContext, useState } from 'react';

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  username: string;
  emoji: string;
} & LoginParams;

export type AuthContextState = {
  authenticated: boolean;
  user: null;
};

export type AuthContextType = {
  register: (params: RegisterParams) => Promise<void>;
} & AuthContextState;

const initialState = {
  authenticated: false,
  user: null
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  register: async () => {}
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextState>(initialState);

  const register = async (params: RegisterParams) => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}user/register`, params)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <AuthContext.Provider value={{ ...auth, register }}>{children}</AuthContext.Provider>;
};
