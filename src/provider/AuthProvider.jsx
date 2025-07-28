import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isAuthenticated = true;
  const [user, setUser] = useState({
    id: "1",
    name: "Developer",
    avatar: "https://i.imgur.com/7VbD1Qm.png",
    email: "developer@example.com",
    phone: "09874298888",
    address: "Cau Giay, Hanoi",
    birthDate: "2003-01-01",
    gender: "Nam",
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };