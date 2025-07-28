import { CircleArrowLeft, Send, TrashIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router";

export const Conversation = (userId) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 2,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 3,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 4,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 5,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },

    {
      id: 6,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 7,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 8,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 9,
      content: "Hi there!, hfwfuisdufsfuhduhfuwef8gsdfu",
      sender_id: "2",
      recipient_id: "1",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 10,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 11,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 12,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 13,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
    {
      id: 14,
      content: "Hello!",
      sender_id: "1",
      recipient_id: "2",
      create_at: "2025-06-26 12:12:51.247014",
    },
  ]);
  const { user } = useAuth();
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-screen h-screen md:p-4">
      <div className="dark:bg-zinc-800 bg-[#F1F4F7] h-full w-full rounded-2xl shadow-lg flex flex-col justify-between">
        <header className="flex items-center justify-between  p-4 border-b border-gray-200 dark:border-zinc-700">
          <Link to={'/message'} className="block md:hidden">
            <CircleArrowLeft className=" dark:text-white text-white-theme hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105" />
          </Link>
          <div className="flex flex-row items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white-theme dark:text-b-wt p-2 ">Tester</span>
          </div>
          <TrashIcon
            size={20}
            className="dark:text-white text-white-theme hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105"
          />
        </header>
        <main className="flex-1 overflow-y-auto p-4 ">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex w-full my-2 ${
                message.sender_id === user.id ? "justify-end" : "justify-start"
              }`}
            >
              <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg max-w-xs break-words">
                {message.content}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>
        <footer className="flex items-center gap-2 px-6 py-2 rounded-b-2xl border-gray-200 dark:border-zinc-700 border-t">
          <input
            ref={inputRef}
            placeholder="Nhập tin nhắn..."
            type="text"
            name=""
            id=""
            className="text-white-theme dark:text-b-wt w-full focus:outline-none px-4 py-2 "
          />
          <Send className="dark:text-white text-white-theme hover:text-red-400 transition-transform duration-150 cursor-pointer hover:scale-105" />
        </footer>
      </div>
    </div>
  );
};
