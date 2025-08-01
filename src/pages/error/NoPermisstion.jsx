import { ShieldAlert } from "lucide-react";
import { Link } from "react-router";

export const NoPermission = () => {
  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-gradient-to-br from-[#FAFAFB] to-[#E5ECFC] px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <ShieldAlert className="w-10 h-10 text-red-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          403 - Không có quyền truy cập
        </h1>
        <p className="text-gray-600 mb-6">
          Bạn không có quyền truy cập trang này. Vui lòng liên hệ với quản trị viên nếu bạn tin rằng đây là một sai sót.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};
