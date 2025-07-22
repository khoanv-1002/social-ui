import { TrashIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export const Conversation = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="w-screen h-screen p-4">
      <div className="dark:bg-zinc-800 bg-[#F1F4F7] h-full w-full rounded-2xl shadow-lg flex flex-col justify-between">
        <header className="flex items-center justify-between  p-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white-theme dark:text-b-wt p-2">Tester</span>
          </div>
          <TrashIcon
            size={20}
            className="text-white hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105"
          />
        </header>
        <main></main>
        <footer>
          <input
            ref={inputRef}
            placeholder="Nhập tin nhắn..."
            type="text"
            name=""
            id=""
            className="bg-white w-full focus:outline-none px-4 py-2 rounded-lg"
          />
        </footer>
      </div>
    </div>
  );
};
