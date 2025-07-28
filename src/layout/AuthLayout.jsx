import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="fixed flex items-center justify-center min-w-screen min-h-screen bg-gradient-to-r from-[#E6E6E6] to-[#D0DBFE]">
      <div className="bg-white w-screen h-screen md:w-[55%] md:h-110 md:rounded-4xl shadow-2xl">
        <Outlet/>
      </div>
    </div>
  );
}   