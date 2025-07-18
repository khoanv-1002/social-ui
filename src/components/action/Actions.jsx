import { MessageCircle, Heart } from "lucide-react";
import { useState } from "react";
import { AddComment } from "../comment/AddComment";
export const Actions = () => {
  const [reactions, setReactions] = useState(0);
  const [comments, setComments] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const handleHeartClick = () => {
    setReactions((prev) => prev + 1);
  };
  const handleCommentClick = () => {};

  return (
    <>
      <div className="flex gap-4 pt-2">
        <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors duration-200">
          <Heart onClick={handleHeartClick} className="w-5 h-5" />
          <span className="ml-1">{reactions}</span>
        </button>
        <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors duration-200">
          <MessageCircle
            onClick={() => setIsHidden(!isHidden)}
            className="w-5 h-5"
          />
          <span className="ml-1">{comments}</span>
        </button>
      </div>
      {isHidden ? <AddComment className="animate-slide-top-to-bottom" /> : null}
    </>
  );
};
