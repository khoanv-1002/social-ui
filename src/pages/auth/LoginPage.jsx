import { Eye, EyeOff, User } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const { pathname } = useLocation();

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  useEffect(() => {
    formRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:rounded-4xl w-full h-full overflow-hidden select-none">
      <div className="flex-5 md:flex-7 flex flex-col items-center justify-center bg-[#7F9FEF] md:rounded-l-4xl md:rounded-r-[35%] rounded-b-[25%] md:animate-slide-left-to-right animate-slide-top-to-bottom">
        <h1 className="text-4xl font-semibold">Chào bạn, trở lại!</h1>
        <span className="text-lg mt-2">Bạn chưa có tài khoản?</span>
        <Link
          to="register"
          className="p-2 border rounded-2xl mt-2 hover:scale-105 transition-transform duration-300"
        >
          Đăng ký
        </Link>
      </div>

      <div className="flex-7 flex flex-col gap-4 items-center md:justify-center h-full mx-2 md:px-4 ">
        <h2 className="font-semibold text-2xl text-center py-4">Đăng nhập</h2>

        <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
          <input
            ref={formRef}
            type="text"
            className="flex-1 bg-transparent focus:outline-none px-2"
            placeholder="Tài khoản"
          />
          <User className="text-gray-500" />
        </div>

        <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 bg-transparent focus:outline-none px-2"
            placeholder="Mật khẩu"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out"
            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <div className="flex items-center justify-between w-full max-w-sm px-2">
          <label
            htmlFor="remember-me"
            className="inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 rounded"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Nhớ mật khẩu
            </span>
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <div className="w-full max-w-sm">
          <button className="w-full bg-[#7F9FEF] hover:bg-blue-400 text-white font-semibold py-2.5 rounded-2xl transition-all duration-300 mt-2">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};
