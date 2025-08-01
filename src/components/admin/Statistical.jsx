import { Newspaper, Users2, UserX } from "lucide-react";

export const Statistical = () => {
  const cards = [
    {
      title: "Tổng người dùng",
      value: "100",
      icon: <Users2 className="text-blue-500" />,
      bgLight: "bg-blue-50",
      bgDark: "dark:bg-blue-900/30",
    },
    {
      title: "Tổng bài viết",
      value: "100",
      icon: <Newspaper className="text-green-500" />,
      bgLight: "bg-green-50",
      bgDark: "dark:bg-green-900/30",
    },
    {
      title: "Người dùng bị khoá",
      value: "100",
      icon: <UserX className="text-red-500" />,
      bgLight: "bg-red-50",
      bgDark: "dark:bg-red-900/30",
    },
  ];

  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex items-center p-5 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${card.bgLight} ${card.bgDark}`}
        >
          <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm mr-4">
            {card.icon}
          </div>
          <div>
            <h4 className="text-sm text-gray-600 dark:text-b-wt">{card.title}</h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
