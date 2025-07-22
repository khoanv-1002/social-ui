import { CircleX } from "lucide-react";
import { useState } from "react";

export const UpdateProfile = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit API call here
    console.log("Updated info:", formData);
    onClose(); // Close after submit
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl shadow p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <CircleX size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Cập nhật hồ sơ</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none"
              placeholder="Nhập tên"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Giới tính</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none"
              required
            >
              <option value="">-- Chọn giới tính --</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Ngày sinh</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none"
              placeholder="Nhập địa chỉ"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
};
