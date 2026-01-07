"use client";

import { createContext, useState } from "react";
import { userData } from "../fakeData";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(userData);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
