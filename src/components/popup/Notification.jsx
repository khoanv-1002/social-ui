import { X } from "lucide-react";
import { useMemo, useState } from "react";

export const Notification = () => {
  const [notifications] = useState([
    { message: "Bạn có một tin nhắn mới", date: "2023-10-01T12:00:00Z" },
    {
      message: "Bạn đã được mời tham gia một sự kiện",
      date: "2023-10-02T14:30:00Z",
    },
    { message: "Bạn có một yêu cầu kết bạn mới", date: "2023-10-03T09:15:00Z" },
    {
      message: "Bạn đã được gắn thẻ trong một bài viết",
      date: "2023-10-04T16:45:00Z",
    },
    {
      message: "Bạn có một thông báo mới từ nhóm",
      date: "2023-10-05T11:20:00Z",
    },
    { message: "Bạn có một tin nhắn mới", date: "2023-10-01T12:00:00Z" },
    {
      message: "Bạn đã được mời tham gia một sự kiện",
      date: "2023-10-02T14:30:00Z",
    },
    { message: "Bạn có một yêu cầu kết bạn mới", date: "2023-10-03T09:15:00Z" },
    {
      message: "Bạn đã được gắn thẻ trong một bài viết",
      date: "2023-10-04T16:45:00Z",
    },
    {
      message: "Bạn có một thông báo mới từ nhóm",
      date: "2023-10-05T11:20:00Z",
    },
    { message: "Bạn có một tin nhắn mới", date: "2023-10-01T12:00:00Z" },
    {
      message: "Bạn đã được mời tham gia một sự kiện",
      date: "2023-10-02T14:30:00Z",
    },
    { message: "Bạn có một yêu cầu kết bạn mới", date: "2023-10-03T09:15:00Z" },
    {
      message: "Bạn đã được gắn thẻ trong một bài viết",
      date: "2023-10-04T16:45:00Z",
    },
    {
      message: "Bạn có một thông báo mới từ nhóm",
      date: "2023-10-05T11:20:00Z",
    },
  ]);

  const content = useMemo(() => {
    if (notifications.length === 0) {
      return <p className="text-gray-600 mt-4">Bạn không có thông báo mới.</p>;
    }
    return (
      <ul className="space-y-4">
        {notifications.map(({ message, date }, idx) => (
          <li
            key={idx}
            className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-300 flex justify-between items-center"
          >
            <div className="flex flex-col">
              <p className="text-gray-800 dark:text-white max-w-[90%]">{message}</p>
              <span className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <X
              size={16}
              className="hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105"
            />
          </li>
        ))}
      </ul>
    );
  }, [notifications]);

  return (
    <div className="absolute top-0 left-[80px] h-full w-80 rounded-r-2xl bg-white dark:bg-black z-1000">
      <div className="flex flex-col h-full w-80 animate-slide-left-to-right rounded-r-2xl text-gray-800 dark:text-b-wt border-r border-b-wt dark:border-zinc-800 shadow-2xl py-2 px-4">
        <h1 className="text-2xl font-bold text-center">Thông báo</h1>
        <div className="flex-1 overflow-y-auto mt-4">{content}</div>
      </div>
    </div>
  );
};
