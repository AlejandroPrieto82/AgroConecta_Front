import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  tipo: "agricultor" | "comprador";
  avatar?: string;
  biografia?: string;
  cultivos?: string[];
  fechaCreacion?: string;
};

type UserContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    const { mockUser } = await import("../mocks/mockUser");
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};