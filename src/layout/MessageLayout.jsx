import { Outlet } from "react-router";
import { Sidebar } from "../components/sidebar/Sidebar";

export const MessageLayout = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black text-white-theme overflow-hidden">
      <Sidebar />
      <div className="absolute top-0 right-0 bottom-0 left-[80px] overflow-x-hidden dark:bg-black text-white-theme ">
        <Outlet />
      </div>
    </div>
  );
}