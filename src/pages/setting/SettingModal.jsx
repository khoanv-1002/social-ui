import { useState, useCallback, useRef, useEffect } from "react";
import { X, ShieldCheck, KeyRound, Shield, ChevronDown } from "lucide-react";
import { ToggleButton } from "../../components/button/ToggleButton";

export const SettingModal = ({ onClose }) => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    if (showPasswordFields && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [showPasswordFields]);

  const handleClose = useCallback(() => {
    onClose();
    setFormData({ password: "", newPassword: "" });
    setShowPasswordFields(false);
  }, [onClose]);

  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleChange2FA = useCallback(() => {
    setIs2FAEnabled((prev) => {
      console.log("Toggle 2FA:", !prev);
      return !prev;
    });
  }, []);

  const handleSave = useCallback(() => {
    if (showPasswordFields && formData.password && formData.newPassword) {
      console.log("Change Password:", formData);
      setFormData({ password: "", newPassword: "" });
      setShowPasswordFields(false);
    }
    onClose();
  }, [showPasswordFields, formData, onClose]);

  const togglePasswordFields = useCallback(() => {
    setShowPasswordFields((prev) => !prev);
  }, []);

  const isPasswordValid = formData.password && formData.newPassword;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 dark:bg-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b dark:border-zinc-800 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            Cài đặt bảo mật
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-red-500 transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Password Section */}
        <div className="my-6">
          <button
            onClick={togglePasswordFields}
            className="flex items-center justify-between w-full mb-3 mx-2 cursor-pointer select-none group p-1 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            type="button"
            aria-expanded={showPasswordFields}
          >
            <div className="flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white font-medium">
                Đổi mật khẩu
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                showPasswordFields ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 overflow-hidden ${
              showPasswordFields
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 mt-2">
                <input
                  ref={passwordInputRef}
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  placeholder="Mật khẩu hiện tại"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-800 dark:text-white focus:outline-none "
                />
                <input
                  type="password"
                  value={formData.newPassword}
                  onChange={handleInputChange("newPassword")}
                  placeholder="Mật khẩu mới"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-800 dark:text-white focus:outline-none "
                />
                <button
                  onClick={handleSave}
                  disabled={!isPasswordValid}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2FA Section */}
        <div className="mb-6 mx-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white font-medium">
                Xác thực hai bước (2FA)
              </span>
            </div>
            <ToggleButton value={is2FAEnabled} onChange={handleChange2FA} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Bảo vệ tài khoản bằng lớp xác thực thứ hai khi đăng nhập.
          </p>
        </div>
      </div>
    </div>
  );
};
