import { createContext, useEffect, useState } from "react";
import { getAccessToken, removeAccessToken, setAccessToken, setRefreshToken } from "../service/storeService";
import { useAlerts } from "../context/AlertContext";
import userService from "../service/userService";
import accountService from "../service/accountService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const { addAlert } = useAlerts();

  const login = async (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const logout = () => {
    removeAccessToken();
    addAlert({
      type: "success",
      message:
        "Đăng xuất thành công",
    });
    setTimeout(() => {
      window.location.href = '/auth';
      setUser(null);
    }, 2000);
  };

  const getCurrentUser = async () => {
    try {
      const [accountRes, userRes] = await Promise.all([
        accountService.getAccountLogin(),
        userService.getUserLogin()
      ]);
      setAccount(accountRes.data);
      setUser(userRes.data);

      console.log("Account:", accountRes.data);
      console.log("User:", userRes.data);

    } catch (err) {
      addAlert?.({
        type: "error",
        message: err?.response?.data?.message || "Không thể tải dữ liệu người dùng!"
      });
    }
  };



  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      getCurrentUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };