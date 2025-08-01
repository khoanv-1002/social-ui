import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isAuthenticated = true;
  const [user, setUser] = useState({
    id: "1",
    name: "Developer",
    avatar: "https://www.open.edu.au/-/media/blog/2023/10-october/learn-how-to-code.jpg?h=477&iar=0&w=715&rev=27fd8b9e501e49bd9722ac012f5336ce&extension=webp&hash=C3AF0F3FDE69B25DDA8002D837164208",
    coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&s",
    email: "developer@example.com",
    phone: "09874298888",
    address: "Cau Giay, Ha Noi",
    birthDate: "2003-02-10",
    gender: "Nam",
    role: "ROLE_ADMIN",
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };