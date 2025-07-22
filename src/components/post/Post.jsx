import { BadgeCheck, MoreHorizontal, Dot } from "lucide-react";
import { Actions } from "../action/Actions";
import { Images } from "./Images";
import { useState } from "react";
import { ShowPost } from "./ShowPost";
export const Post = ({ post }) => {
  const [isShowPost, setIsShowPost] = useState(false);

  if (!post) {
    return <div className="text-center text-zinc-400 pt-4">Không có bài viết nào.</div>;
  }

  const { user, image, caption } = post;

  return (
    <>
      {isShowPost && <ShowPost post={post}  onClose={() => setIsShowPost(false)} />}
      <div className="border-b dark:border-zinc-700 dark:text-white border-b-wt py-4 px-4 md:px-6">
        <div className="mb-6 flex items-start">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-purple-200 object-cover"
            loading="lazy"
          />
          <div className="flex flex-col ml-2 flex-1">
            <div className="flex items-center flex-wrap">
              <span className="font-semibold text-xs md:text-base flex items-center">
                {user.username}
                <BadgeCheck className="ml-1 text-green-500 w-3 h-3 md:w-4 md:h-4" />
              </span>
              <span className="text-zinc-400 text-xs md:text-sm flex items-center">
                <Dot className="w-4 h-4" />
                {user.time}
              </span>
            </div>
            <p
              onClick={() => setIsShowPost(true)}
              className="text-sm md:text-base mt-1 cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Show post details"
            >
              {caption}
            </p>
          </div>
          <MoreHorizontal className="ml-2 text-zinc-400 cursor-pointer w-4 h-4 md:w-5 md:h-5" />
        </div>
        <Images imgs={image} />
        <Actions />
      </div>
    </>
  );
};

