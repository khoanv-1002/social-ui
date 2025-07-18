import { useAuth } from "../../context/AuthContext";

export const Suggestion = () => {
  const { user } = useAuth();
  const suggestions = [
    { username: "ngoclan151005", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    { username: "df.rbee_25", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    { username: "tranphuong_203", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
    {
      username: "hoai.vu.7127146",
      avatar: '"https://i.imgur.com/7VbD1Qm.png"',
    },
    { username: "ln.anh03", avatar: '"https://i.imgur.com/7VbD1Qm.png"' },
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full ring-2 ring-pink-500"
          />
          <p className="text-sm text-zinc-400">{user.name}</p>
        </div>
        <button className="text-blue-400 text-sm">Đăng xuất</button>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-zinc-400">Đề xuất cho bạn</p>
        <button className="text-sm">Xem tất cả</button>
      </div>
      <div className="flex flex-col gap-3">
        {suggestions.map((s, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://i.imgur.com/7VbD1Qm.png"
                className="w-10 h-10 rounded-full ring-2 ring-pink-500"
              />
              <p className="text-sm font-semibold ">{s.username}</p>
            </div>
            <button className="text-sm text-blue-400">Thêm bạn bè</button>
          </div>
        ))}
      </div>
    </>
  );
};
