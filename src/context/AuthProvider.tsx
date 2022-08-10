import React, { createContext, Dispatch, useState } from "react";
import { UserRole } from "../types";

interface Props {
  children: React.ReactNode;
}

interface LoginData {
  role?: UserRole;
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
  const [auth, setAuth] = useState<LoginData>({
    id: "3434",
    role: UserRole.hr,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
