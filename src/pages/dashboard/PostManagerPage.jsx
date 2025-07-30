import { Eye, EyeOff, Trash2, FileEdit } from "lucide-react";
import { useState } from "react";

const allPosts = [
  {
    id: 1,
    title: "Bài viết đầu tiên",
    author: "Nguyễn Văn A",
    images: [
      "https://picsum.photos/id/1/60",
      "https://picsum.photos/id/2/60",
      "https://picsum.photos/id/3/60",
    ],
    status: "published",
    date: "2025-07-25",
  },
  {
    id: 2,
    title: "Bài viết đơn",
    author: "Lê Thị B",
    images: ["https://picsum.photos/id/10/60"],
    status: "hidden",
    date: "2025-07-20",
  },
];


export const PostManagerPage = () => {
  const [filters, setFilters] = useState({ status: "all" });

  const filteredPosts = allPosts.filter((post) => {
    return filters.status === "all" || post.status === filters.status;
  });

  return (
    <div className="w-full bg-white dark:bg-[#1f2937] rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Quản lý bài viết
      </h2>

      {/* Bộ lọc */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          value={filters.status}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="published">Đang hiển thị</option>
          <option value="hidden">Đã ẩn</option>
        </select>
      </div>

      {/* Bảng */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
              <th className="px-4 py-2">Ảnh</th>
              <th className="px-4 py-2">Nội dung</th>
              <th className="px-4 py-2">Tác giả</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2">Ngày đăng</th>
              <th className="px-4 py-2 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  Không có bài viết phù hợp.
                </td>
              </tr>
            ) : (
              filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-3">
                    <div className="relative w-12 h-12">
                      <img
                        src={post.images[0]} // ảnh đầu tiên
                        alt="thumbnail"
                        className="w-full h-full object-cover rounded-lg shadow"
                      />
                      {post.images.length > 1 && (
                        <span className="absolute bottom-0 right-0 text-xs bg-black bg-opacity-70 text-white px-1 rounded">
                          +{post.images.length - 1}
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-gray-900 dark:text-white">
                    {post.title}
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {post.author}
                  </td>
                  <td className="px-4 py-3">
                    {post.status === "published" ? (
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Eye size={16} /> Hiển thị
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500 dark:text-red-400">
                        <EyeOff size={16} /> Đã ẩn
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {post.date}
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-3">
                    <button
                      title="Sửa"
                      className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:scale-105 transition"
                    >
                      <FileEdit
                        size={16}
                        className="text-blue-600 dark:text-blue-300"
                      />
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
