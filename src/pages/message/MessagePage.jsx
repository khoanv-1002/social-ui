import { Conversation } from "../../components/message/Conversation";
import { Menu } from "../../components/message/Menu";

export const MessagePage = () => {
  return (
    <div className="flex">
        <Menu/>
        <Conversation/>
    </div>
  );
}