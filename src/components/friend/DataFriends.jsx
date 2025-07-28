import { useEffect, useMemo, useState } from "react";

export const DataFriends = ({ ...otherProps }) => {
  const [friend, setFriend] = useState(null);

  const getAllFriends = async () => {
    try {
      const data = null; // await fetch("/api/friends");
      setFriend(data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  };

  const handleViewMore = () => {
    // Xử lý logic xem thêm ở đây
    console.log("View more clicked");
    // Có thể gọi API để load thêm dữ liệu hoặc navigate đến trang khác
  };

  const renderActions = useMemo(() => {
    switch (otherProps.type) {
      case "friends":
        return (
          <button className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm w-full sm:w-auto">
            Huỷ kết bạn
          </button>
        );
      case "invites":
        return (
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
              Chấp nhận
            </button>
            <button className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm">
              Từ chối
            </button>
          </div>
        );
      case "suggest":
        return (
          <button className="px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm w-full sm:w-auto">
            Thêm bạn bè
          </button>
        );
      case "blocked":
        return (
          <button className="px-3 py-1.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-sm w-full sm:w-auto">
            Huỷ chặn
          </button>
        );
      default:
        return null;
    }
  }, [otherProps.type]);

  return (
    <>
      <div className="flex justify-between flex-col h-full space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {otherProps.title}
        </h3>

        <div className="flex-1 space-y-4 overflow-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/50"
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Nguyễn Văn A
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {renderActions}
            </div>
          </div>
        </div>

        {/* Nút xem thêm */}
        <div className="text-center mt-auto">
          <button
            onClick={handleViewMore}
            className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:underline transition cursor-pointer"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </>
  );
};
