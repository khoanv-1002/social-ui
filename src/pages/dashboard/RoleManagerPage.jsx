import { useState } from "react";
import { UserPlus } from "lucide-react";

const users = ["nguyenvana", "tranthib", "lequocd", "hoangminh", "phamhue", "admin123"];

export const RoleManagerPage = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [userRoles, setUserRoles] = useState({});

  const filteredUsers = users.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  const grantAdmin = () => {
    if (!selectedUser) return;
    setUserRoles((prev) => ({
      ...prev,
      [selectedUser]: ["Admin"],
    }));
  };

  const isAdmin = selectedUser && userRoles[selectedUser]?.includes("Admin");

  return (
    <div className="bg-white dark:bg-[#121C2F] p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <UserPlus className="w-6 h-6 text-blue-600" />
        Cấp quyền Admin
      </h2>

      <div className="mb-6">
        <label className="text-gray-700 dark:text-gray-300 font-medium block mb-2">
          Tìm tài khoản:
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedUser(null);
          }}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          placeholder="Nhập tên tài khoản"
        />
        {search && filteredUsers.length > 0 && (
          <ul className="mt-2 max-h-40 overflow-y-auto rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm">
            {filteredUsers.map((user) => (
              <li
                key={user}
                onClick={() => {
                  setSelectedUser(user);
                  setSearch(user);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-zinc-700 ${
                  user === selectedUser ? "bg-blue-50 dark:bg-zinc-700" : ""
                }`}
              >
                {user}
              </li>
            ))}
          </ul>
        )}
        {search && filteredUsers.length === 0 && (
          <p className="text-sm text-red-500 mt-2">Không tìm thấy tài khoản</p>
        )}
      </div>

      <button
        onClick={grantAdmin}
        disabled={!selectedUser}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        Cấp quyền Admin
      </button>

      {selectedUser && (
        <div className="mt-6 text-center">
          {isAdmin ? (
            <p className="text-green-600 font-medium">
              ✅ {selectedUser} đã có quyền Admin.
            </p>
          ) : (
            <p className="text-gray-500">Tài khoản chưa có quyền Admin.</p>
          )}
        </div>
      )}
    </div>
  );
};
