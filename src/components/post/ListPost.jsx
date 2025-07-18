import { MoreHorizontal } from "lucide-react";
import { Actions } from "../action/Actions";

export const ListPost = () => {
  const posts = Array(4).fill({
    user: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
      username: "lienquanmobile",
      time: "3h ago",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    caption:
      "Đi làm rồi thì hay có thói quen time-laspe quay coi mình làm việc sao mà thấy nói là chủ yếu ☺️ Nhưng mà…bên MISA HCM đang tuyển job Nhân viên Kinh doanh - không yêu cầu kinh nghiệm - mom nào newbie/fresher mà giao tiếp tốt thì về với đội của tôi ✨",
  });

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="border-b border-zinc-700 py-4 px-6">
          <div className="mb-6 flex items-start">
            <img
              src={post.user.avatar}
              alt={post.user.username}
              className="w-10 h-10 rounded-full ring-2 ring-purple-200 object-cover"
            />
            <div className="flex flex-col ml-2 flex-1">
              <div className="flex items-center">
                <span className="font-semibold">{post.user.username}</span>
                <span className="text-zinc-400 text-sm ml-2">
                  {post.user.time}
                </span>
              </div>
              <p className="text-sm mt-1">{post.caption}</p>
            </div>
            <MoreHorizontal className="ml-2 text-zinc-400 cursor-pointer" />
          </div>
          <img
            src={post.image}
            alt="post"
            className="rounded-2xl w-full object-cover"
          />
          <Actions/>
        </div>
      ))}
    </>
  );
};
