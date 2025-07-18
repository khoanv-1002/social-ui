import { Outlet } from "react-router";
import { Header, Menu } from "../components/profile";

export const ProfileLayout = () => {
  return (
    <div className="m-4 md:mx-auto md:w-[80%] min-h-screen">
        <Header />
        <Menu />
        <Outlet/>
    </div>
  );
}