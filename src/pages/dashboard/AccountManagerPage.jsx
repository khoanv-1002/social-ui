import { Ban, BadgeCheck, Trash2, Edit2 } from "lucide-react";
import { useState } from "react";

const allUsers = [
  { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", status: "active", role: "admin" },
  { id: 2, name: "Trần Thị B", email: "b@gmail.com", status: "locked", role: "user" },
  { id: 3, name: "Lê Văn C", email: "c@gmail.com", status: "active", role: "user" },
  { id: 4, name: "Phạm Thị D", email: "d@gmail.com", status: "locked", role: "admin" },
];

export const AccountManagerPage = () => {
  const [filters, setFilters] = useState({ status: "all", role: "all" });

  const filteredUsers = allUsers.filter((user) => {
    const matchStatus = filters.status === "all" || user.status === filters.status;
    const matchRole = filters.role === "all" || user.role === filters.role;
    return matchStatus && matchRole;
  });

  return (
    <div className="w-full bg-white dark:bg-[#1f2937] rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Quản lý tài khoản
      </h2>

      {/* Bộ lọc */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          value={filters.status}
          onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang hoạt động</option>
          <option value="locked">Bị khóa</option>
        </select>

        <select
          className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          value={filters.role}
          onChange={(e) => setFilters((prev) => ({ ...prev, role: e.target.value }))}
        >
          <option value="all">Tất cả vai trò</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
              <th className="px-4 py-2">Họ tên</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Vai trò</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  Không có người dùng phù hợp.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-white">{user.name}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{user.email}</td>
                  <td className="px-4 py-3 capitalize text-indigo-600 dark:text-indigo-300">
                    {user.role}
                  </td>
                  <td className="px-4 py-3">
                    {user.status === "active" ? (
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <BadgeCheck size={16} /> Kích hoạt
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500 dark:text-red-400">
                        <Ban size={16} /> Bị khoá
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-3">
                    <button
                      title="Sửa"
                      className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:scale-105 transition"
                    >
                      <Edit2 size={16} className="text-blue-600 dark:text-blue-300" />
                    </button>
                    <button
                      title="Xoá"
                      className="p-2 rounded-full bg-red-100 dark:bg-red-900 hover:scale-105 transition"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
