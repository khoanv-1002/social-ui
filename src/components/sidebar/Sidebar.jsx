import {
  Home,
  Search,
  MessageCircle,
  Heart,
  User,
  Settings,
} from "lucide-react";
import { Link, NavLink } from "react-router";

const SidebarItem = ({ icon: Icon, label, link }) => (
  <NavLink
    to={link}
    className="flex items-center gap-4 px-4 py-2 hover:bg-zinc-800 rounded-lg cursor-pointer"
  >
    {({ isActive }) => (
      <>
        <Icon
          className={`w-6 h-6 ${isActive ? "text-amber-500" : "text-white"}`}
        />
        <span className="hidden md:block text-sm">{label}</span>
      </>
    )}
  </NavLink>
);

export const Sidebar = () => {
  const sidebarItems = [
    { icon: Home, label: "Trang chủ", link: "/" },
    { icon: Search, label: "Tìm kiếm", link: "/search" },
    { icon: MessageCircle, label: "Tin nhắn", link: "/message" },
    { icon: Heart, label: "Thông báo", link: "/notification" },
    { icon: User, label: "Trang cá nhân", link: "/profile" },
    { icon: Settings, label: "Cài đặt", link: "/settings" },
  ];
  return (
    <div className="w-20 md:w-64 p-4 border-r border-zinc-800 fixed top-0 left-0 h-screen z-50 bg-black">
      <Link
        to={"/"}
        className="text-2xl font-lobster font-bold mb-6 hidden md:block hover:scale-101 transition-transform duration-300 ease-in-out "
      >
        Social Media
      </Link>
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
