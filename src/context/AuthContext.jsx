import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuthenticated = true;
  const [user, setUser] = useState({
    name: "coder",
    avatar: "https://i.imgur.com/7VbD1Qm.png",
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
