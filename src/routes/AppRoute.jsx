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
import { FriendPage } from "../pages/friends/FriendPage";
import { Image } from "../components/profile/Image";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignUpPage } from "../pages/auth/SignUp";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="friends" element={<FriendPage />} />"
          <Route path="settings" element={<SettingPage />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path="friends" element={<FriendPage />} />
            <Route path="images" element={<Image />} />
            <Route path="info" element={<Info />} />
          </Route>
        </Route>
        <Route path="/message" element={<MessageLayout />}>
          <Route index element={<MessagePage />} />
          <Route path=":id" element={<MessagePage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<SignUpPage/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
