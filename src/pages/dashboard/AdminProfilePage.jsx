import {
  BadgeCheck,
  Mail,
  Phone,
  UserRoundCog,
  KeyRound,
  Eye,
  EyeOff,
  ShieldUser
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export const AdminProfilePage = () => {
  const { user } = useAuth();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitPassword = () => {
    if (!password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ mật khẩu!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    alert(`Mật khẩu đã được đổi thành: ${password}`);
    setPassword("");
    setConfirmPassword("");
    setShowChangePassword(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[#121C2F] p-6 rounded-3xl shadow-md mt-8 select-none">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Thông tin Quản trị viên
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=11"}
          alt="user avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
        />

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <UserRoundCog className="text-gray-600 dark:text-gray-300" />
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {user.name}
              <BadgeCheck className="inline-block text-green-500 w-5 h-5 ml-1" />
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">{user.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-300">{user.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <ShieldUser className="text-gray-600 dark:text-gray-300"/>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
              {user.role || "admin"}
            </span>
          </div>
        </div>
      </div>

      {/* Đổi mật khẩu */}
      <div className="mt-6 flex flex-col items-center gap-4">
        {!showChangePassword ? (
          <button
            onClick={() => setShowChangePassword(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            <KeyRound size={18} />
            Đổi mật khẩu
          </button>
        ) : (
          <div className="w-full max-w-sm space-y-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu mới"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập lại mật khẩu"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none pr-10"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowChangePassword(false)}
                className="px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
              >
                Huỷ
              </button>
              <button
                onClick={handleSubmitPassword}
                className="px-4 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Lưu mật khẩu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
