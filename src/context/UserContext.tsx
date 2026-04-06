// src/context/UserContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"; // <-- type-only import
import { mockUser } from "../mocks/mockUser";

type UserContextType = {
  user: typeof mockUser | null;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<typeof mockUser | null>(null);

  const login = () => setUser(mockUser);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};