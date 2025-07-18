import { MoreHorizontal } from "lucide-react";
import { NewPost } from "../../components/post/NewPost";
import { ListPost } from "../../components/post/ListPost";
import { Suggestion } from "../../components/suggestion/Suggestion";

export const HomePage = () => {
  return (
    <div className="flex">
      <div className="flex-1 px-6 py-4 max-w-2xl mx-auto">
        <div className="border-2 min-h-screen border-zinc-700 rounded-t-4xl">
          {/* new post */}
          <NewPost />
          {/* list post */}
          <ListPost />
        </div>
      </div>

      {/* Suggestions */}
      <div className="hidden lg:block w-80 p-4">
        <Suggestion/>
      </div>
    </div>
  );
};
