import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { UpdateProfile } from "./UpdateProfile";
import {
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Cake,
  User as UserIcon,
} from "lucide-react";

const calculateAge = (birthDate) => {
  const today = new Date();
  const dob = new Date(birthDate);
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
};

export const Info = () => {
  const { user } = useAuth(); // Dữ liệu user từ context
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const age = calculateAge(user.birthDate);

  return (
    <div className="flex flex-col gap-4 text-white-theme dark:text-b-wt p-4">
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-500" />
          <span>{user.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} className="text-blue-500" />
          <span>{user.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-500" />
          <span>{user.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-blue-500" />
          <span>{new Date(user.birthDate).toLocaleDateString("vi-VN")}</span>
        </div>

        <div className="flex items-center gap-2">
          <Cake size={16} className="text-blue-500" />
          <span>{age} tuổi</span>
        </div>

        <div className="flex items-center gap-2">
          <UserIcon size={16} className="text-blue-500" />
          <span>{user.gender}</span>
        </div>
      </div>

      <button
        onClick={() => setShowUpdateProfile(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Chỉnh sửa thông tin
      </button>

      {showUpdateProfile && (
        <UpdateProfile onClose={() => setShowUpdateProfile(false)} />
      )}
    </div>
  );
};
