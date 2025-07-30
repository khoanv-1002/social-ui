import {
  AtSign,
  LockKeyhole,
  MailCheck,
  MapPin,
  RotateCcwKey,
  UserRoundPen,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Stepper } from "../../components/stepper/Stepper";
import { IntroLoading } from "../../components/common/IntroLoading";
import { useState } from "react";

// step 1
const VerifyEmail = () => {
  return (
    <>
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2"
          placeholder="Nhập Email"
        />
        <AtSign className="text-gray-500" />
      </div>
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2"
          placeholder="Nhập OTP"
        />
        <MailCheck className="text-gray-500" />
      </div>
    </>
  );
};

// step 2

const RegisterAcc = () => {
  return (
    <>
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2"
          placeholder="Nhập tài khoản"
        />
        <UserRoundPen className="text-gray-500" />
      </div>
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2"
          placeholder="Nhập mật khẩu"
        />
        <LockKeyhole className="text-gray-500" />
      </div>
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl w-full max-w-sm justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2"
          placeholder="Nhập lại mật khẩu"
        />
        <RotateCcwKey className="text-gray-500" />
      </div>
    </>
  );
};

const RegisterInfo = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2 placeholder:text-sm"
          placeholder="Nhập họ tên"
        />
        <UserRoundPen className="text-gray-500" />
      </div>

      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-2xl justify-between">
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none px-2 placeholder:text-sm"
          placeholder="Nhập địa chỉ"
        />
        <MapPin className="text-gray-500" />
      </div>

      <div className="flex gap-3">
        <div className="flex-1 bg-gray-200 px-3 py-3 rounded-2xl">
          <select
            id="gender"
            className="w-full bg-transparent text-sm focus:outline-none"
          >
            <option value="">Giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div className="flex-1 bg-gray-200 px-3 py-3 rounded-2xl">
          <input
            type="date"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigate();

  document.title = "Đăng ký tài khoản";
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <VerifyEmail />;
      case 1:
        return <RegisterAcc />;
      case 2:
        return <RegisterInfo />;
      default:
        setTimeout(() => {
          navigation("/");
        }, 2000);
        document.title = "Mạng xã hội";
        return <IntroLoading />;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:rounded-4xl w-full h-full overflow-hidden select-none">
        <div className="flex-7 flex flex-col items-center justify-start ">
          <h2 className="font-semibold text-2xl text-center py-4">Đăng ký</h2>
          <Stepper currentStep={currentStep} />
          <div className="flex flex-col items-center justify-center w-full max-w-md p-4 gap-y-4 mt-2">
            {renderStepContent()}
          </div>
          <div className="w-full max-w-sm p-4">
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full bg-[#7F9FEF] hover:bg-blue-400 text-white font-semibold py-2.5 rounded-2xl transition-all duration-300 mt-2"
            >
              Xác thực
            </button>
          </div>
        </div>
        <div className="flex-5 md:flex-7 flex flex-col items-center justify-center bg-[#7F9FEF] rounded-t-[25%] animate-slide-bottom-to-top md:rounded-r-4xl md:rounded-l-[35%] md:animate-slide-right-to-left">
          <h1 className="text-4xl font-semibold">Chào mừng!</h1>
          <span className="text-lg mt-2">
            Bạn đã có tài khoản? Hãy bắt đầu ngay!
          </span>
          <Link
            to="/auth"
            className="p-2 border rounded-2xl mt-2 hover:scale-105 transition-transform duration-300"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </>
  );
};
