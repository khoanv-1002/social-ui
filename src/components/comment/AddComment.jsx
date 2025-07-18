import { Send } from "lucide-react";

export const AddComment = () => {
  return (
    <div className="flex items-center justify-between mt-4 ">
      <img
        src="https://i.imgur.com/7VbD1Qm.png"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 text-white">
        <Send />
      </button>
    </div>
  );
};
