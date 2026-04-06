import { createContext } from "react";

export type User = {
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

export type UserContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);