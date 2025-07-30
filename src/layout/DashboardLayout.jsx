import { Outlet } from "react-router";
import { Menu } from "../components/admin/Menu";

export const DashboardLayout = () => {
  return (
    <div className="fixed h-screen w-screen bg-gray-100 dark:bg-[#384A71] ">
      <Menu/>
      <div className="absolute left-64 min-h-screen w-[calc(100%-16rem)] z-20 p-6">
        <Outlet />
      </div>
    </div>
  );
};
