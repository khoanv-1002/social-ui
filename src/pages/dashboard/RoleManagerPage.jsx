import { useState } from "react";

const roles = ["Admin", "Editor", "Viewer"];

const permissions = [
  "Xem bài viết",
  "Tạo bài viết",
  "Chỉnh sửa bài viết",
  "Xoá bài viết",
  "Quản lý người dùng",
];

const defaultPermissions = {
  Admin: [true, true, true, true, true],
  Editor: [true, true, true, false, false],
  Viewer: [true, false, false, false, false],
};

export const RoleManagerPage = () => {
  const [roleSelected, setRoleSelected] = useState("Admin");
  const [rolePermissions, setRolePermissions] = useState(defaultPermissions);

  const togglePermission = (index) => {
    const updated = [...rolePermissions[roleSelected]];
    updated[index] = !updated[index];
    setRolePermissions({
      ...rolePermissions,
      [roleSelected]: updated,
    });
  };

  return (
    <div className="bg-white dark:bg-[#121C2F] p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Quản lý phân quyền
      </h2>

      {/* Role Selector */}
      <div className="mb-6">
        <label className="text-gray-700 dark:text-gray-300 font-medium">
          Chọn vai trò:
        </label>
        <select
          value={roleSelected}
          onChange={(e) => setRoleSelected(e.target.value)}
          className="ml-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Permissions Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-left text-gray-700 dark:text-gray-200">
              <th className="px-4 py-2">Quyền</th>
              <th className="px-4 py-2 text-center">Được cấp</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="px-4 py-3 text-gray-800 dark:text-white">
                  {perm}
                </td>
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={rolePermissions[roleSelected][index]}
                    onChange={() => togglePermission(index)}
                    className="w-4 h-4 accent-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
