import React, { createContext, Dispatch, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface LoginData {
  role?: string;
  id?: string;
  token?: string;
}

interface Auth {
  auth: LoginData;
  setAuth: Dispatch<React.SetStateAction<LoginData>>;
}

export const AuthContext = createContext<Auth>({
  auth: {},
  setAuth: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<LoginData>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
