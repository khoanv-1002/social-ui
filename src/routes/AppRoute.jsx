import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "../pages/error/NotFound";
import PrivateRoute from "./PrivateRoute";
import { HomePage } from "../pages/home/HomePage";
import { MainLayout, AuthLayout, ProfileLayout } from "../layout";
import { ListPost } from "../components/post/ListPost";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="friends" element={<div>Friends Page</div>} />"
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<ListPost/>} />
            <Route path="friends" element={<div>Users Page</div>} />
            <Route path="images" element={<div>Images Page</div>} />
            <Route path="info" element={<div>File Page</div>} />
          </Route>
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="posts" element={<div>Posts Page</div>} />
          <Route path="messages" element={<div>Messages Page</div>} />
          <Route path="notifications" element={<div>Notifications Page</div>} />
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
