import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isAuthenticated = true;
  const [user, setUser] = useState({
    name: "Developer",
    avatar: "https://i.imgur.com/7VbD1Qm.png",
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };