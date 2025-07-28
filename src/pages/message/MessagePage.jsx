import { useParams } from "react-router";
import { Conversation } from "../../components/message/Conversation";
import { Menu } from "../../components/message/Menu";

export const MessagePage = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full">
      <div className={`${id ? "hidden md:block" : "block"}`}>
        <Menu />
      </div>
      {id && (
        <Conversation userId={id} />
      )}
      {!id && (
        <div className="hidden md:flex items-center justify-center w-full text-gray-500">
          Chọn một cuộc trò chuyện để bắt đầu
        </div>
      )}
    </div>
  );
};
