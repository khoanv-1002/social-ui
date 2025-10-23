import { BadgeCheck, LogOut, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export const Suggestion = () => {
  const { user, logout } = useAuth();
  const suggestions = [
    { username: "Lan cục cức", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    { username: "Tester", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    { username: "Dev", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    {
      username: "Project Manager",
      avatar: '"https://i.imgur.com/7VbD1Qm.png"',
    },
    { username: "Leader", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-6 dark:text-white text-white-theme">
        <div className="flex items-center gap-2">
          <img
            src={user?.avatarUrl}
            className="w-10 h-10 rounded-full ring-2 ring-pink-500"
          />
          <p className="text-xl font-semibold ">{user?.fullName}</p>
          {user?.isVerified && (
            <BadgeCheck className="ml-1 text-green-500 w-3 h-3 md:w-4 md:h-4" />

          )}
        </div>
        <button onClick={logout} className="hover:scale-105 hover:text-red-400 text-sm">
          <LogOut />
        </button>
      </div>
      <div className="mb-4 flex justify-between items-center dark:text-white">
        <p className="text-sm text-zinc-400">Đề xuất cho bạn</p>
        <button className="text-sm">Xem tất cả</button>
      </div>
      <div className="flex flex-col gap-3 dark:text-white">
        {suggestions.map((s, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://i.imgur.com/7VbD1Qm.png"
                className="w-10 h-10 rounded-full ring-2 ring-pink-500"
              />
              <p className="text-sm font-semibold dark:text-white text-white-theme">{s.username}</p>
            </div>
            <button className="text-sm hover:scale-105 hover:text-red-400">
              <UserPlus />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
