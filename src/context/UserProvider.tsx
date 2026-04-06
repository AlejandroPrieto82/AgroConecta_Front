import { useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { User } from "./UserContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
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

export default UserProvider;