import { BadgeInfo, Bug, CircleCheck, Dot, X } from "lucide-react";
import { useEffect, useState } from "react";

const alertMap = {
  error: {
    icon: <Bug className="text-red-500" />,
    label: "Lỗi!",
    bg: "bg-red-100 dark:bg-[#342527] text-red-800",
  },
  success: {
    icon: <CircleCheck className="text-green-500" />,
    label: "Thành công!",
    bg: "bg-green-100 dark:bg-[#1a2e22] text-green-800",
  },
  warning: {
    icon: <BadgeInfo className="text-yellow-500" />,
    label: "Cảnh báo!",
    bg: "bg-yellow-100 dark:bg-yellow-200 text-yellow-800",
  },
};

export const Alert = ({
  message,
  type = "error",
  onClose,
  duration = 3000,
}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  const { icon, label, bg } = alertMap[type] || alertMap.error;

  return (
    show && (
      <div className="fixed top-4 right-2 z-50 transition-all duration-300 animate-slide-right-to-left">
        <div
          className={`flex flex-col w-[280px] sm:w-[300px] p-4 rounded-xl shadow-lg ${bg}`}
        >
          <div className="flex items-start">
            {icon}
            <div className="flex flex-col justify-start items-start ml-2">
              <span className="font-semibold select-none">{label}</span>
              <p className="text-sm break-words max-w-45">{message}</p>
            </div>
            <button onClick={onClose} className="ml-auto">
              <X
                size={18}
                className="text-gray-500 hover:text-black dark:hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
