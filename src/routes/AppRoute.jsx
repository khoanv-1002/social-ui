import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "../pages/error/NotFound";
import PrivateRoute from "./PrivateRoute";
import { HomePage } from "../pages/home/HomePage";
import { MainLayout, AuthLayout, ProfileLayout } from "../layout";
import { SettingPage } from "../pages/setting/SettingPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { Info } from "../components/profile/Info";
import { MessageLayout } from "../layout/MessageLayout";
import { MessagePage } from "../pages/message/MessagePage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<>search</>} />
          <Route path="friends" element={<div>Friends Page</div>} />"
          <Route path="settings" element={<SettingPage />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path="friends" element={<div>Users Page</div>} />
            <Route path="images" element={<div>Images Page</div>} />
            <Route path="info" element={<Info />} />
          </Route>
        </Route>
        <Route path="/message" element={<MessageLayout />}>
          <Route index element={<MessagePage/>} />
          <Route path=":id" element={<div>Message Detail Page</div>} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<div>Login Page</div>} />
          <Route path="register" element={<div>Register Page</div>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
