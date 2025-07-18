export const NewPost = () => {
  return (
    <div className="flex justify-between rounded-t-4xl items-center border-b border-zinc-700 py-4 px-6">
      <div className="flex items-center gap-4">
        <img
          src="https://i.imgur.com/7VbD1Qm.png"
          className="w-10 h-10 rounded-full ring-2 ring-pink-500"
        />
        <input type="text" name="" id="" placeholder="Bạn đang nghĩ gì?" />
      </div>

      <button className="border-zinc-700 border font-bold text-white px-4 py-2 rounded-xl transition-colors duration-200">
        Đăng
      </button>
    </div>
  );
};
