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
  PencilLine,
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
  const { user } = useAuth();
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const age = calculateAge(user.birthDate);

  const infoItems = [
    { icon: Phone, label: user.phone },
    { icon: Mail, label: user.email },
    { icon: MapPin, label: user.address },
    {
      icon: CalendarDays,
      label: new Date(user.birthDate).toLocaleDateString("vi-VN"),
    },
    { icon: Cake, label: `${age} tuổi` },
    { icon: UserIcon, label: user.gender },
  ];

  return (
    <div className="md:p-4 pt-2 text-white-theme dark:text-b-wt select-none">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 space-y-4 transition-all">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Thông tin cá nhân
        </h2>

        <div className="space-y-3">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg hover:shadow-sm transition"
            >
              <item.icon size={20} className="text-blue-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowUpdateProfile(true)}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <PencilLine size={16} />
          Chỉnh sửa thông tin
        </button>
      </div>

      {showUpdateProfile && (
        <UpdateProfile onClose={() => setShowUpdateProfile(false)} />
      )}
    </div>
  );
};
