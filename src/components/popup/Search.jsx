import { BadgeCheck, SearchIcon, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ListItem = ({ avatarUrl, name, isVerified }) => (
  <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors">
    <img src={avatarUrl} alt={name} className="w-8 h-8 rounded-full" />
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">{name}</span>
        {isVerified && (
          <BadgeCheck className="ml-1 text-green-500 w-3 h-3 md:w-4 md:h-4" />
        )}
      </div>
      <X size={16} className="hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105"/>
    </div>
  </div>
);

export const Search = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    {
      id: 1,
      avatarUrl: "https://i.imgur.com/7VbD1Qm.png",
      name: "Developer",
      isVerified: true,
    },
  ]);

  const handleSearch = () => {
    if (!value.trim()) return;

    // Thêm vào recentSearches nếu chưa có
    const alreadyExists = recentSearches.some(
      (item) => item.name.toLowerCase() === value.trim().toLowerCase()
    );
    if (!alreadyExists) {
      setRecentSearches([
        {
          id: Date.now(),
          avatarUrl: "https://i.imgur.com/7VbD1Qm.png", // giả lập avatar
          name: value.trim(),
          isVerified: false,
        },
        ...recentSearches,
      ]);
    }

    setValue("");
  };

  const clearAll = () => {
    setRecentSearches([]);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="absolute top-0 left-[80px] h-full w-80 bg-[#F1F4F7] dark:bg-zinc-900 z-1000 rounded-r-2xl">
      <div className="flex flex-col h-full w-80 animate-slide-left-to-right text-white-theme dark:text-b-wt border-r py-2 rounded-r-2xl border-b-wt dark:border-zinc-800 shadow-2xl">
        <h1 className="text-2xl font-bold text-center">Tìm kiếm</h1>

        {/* Ô input */}
        <div className="flex dark:bg-zinc-600 bg-white items-center gap-2 mt-4 border-zinc-300 rounded-xl dark:border-zinc-300 mx-4">
          <label htmlFor="search" className="ml-2">
            <SearchIcon />
          </label>
          <input
            ref={inputRef}
            id="search"
            placeholder="Nhập từ khoá"
            className="p-2 w-full text-white-theme dark:text-b-wt focus:outline-none"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          />
          {value && (
            <span
              onClick={() => setValue("")}
              className="mr-2 cursor-pointer hover:text-red-500 transition-opacity duration-200"
            >
              <X />
            </span>
          )}
        </div>

        {/* Danh sách gần đây */}
        <div className="flex-1 overflow-y-auto mt-4 border-t border-b-wt dark:border-zinc-700 p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Tìm kiếm gần đây
            </span>
            {recentSearches.length > 0 && (
              <Trash2
                size={16}
                onClick={clearAll}
                className="hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105"
              />
            )}
          </div>

          {recentSearches.length === 0 ? (
            <p className="text-sm text-gray-400 italic">
              Chưa có dữ liệu tìm kiếm
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {recentSearches.map((item) => (
                <ListItem
                  key={item.id}
                  avatarUrl={item.avatarUrl}
                  name={item.name}
                  isVerified={item.isVerified}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
