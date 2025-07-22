import { BadgeCheck, Dot } from "lucide-react";

const comments = [
  {
    id: "1",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    name: "John Doe",
    content: "New ui.",
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: "2",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    name: "Jane Smith",
    content: "This is another comment.",
    createdAt: "2023-10-02T14:30:00Z",
  },
];
export const ListComment = (postId = "a12was") => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="flex py-4 border-b border-zinc-700">
          <img
            src={comment.avatarUrl}
            alt={`${comment.name}'s avatar`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <div className="flex items-center flex-wrap">
              <span className="font-semibold text-xs md:text-base flex items-center dark:text-white text-white-theme">
                {comment.name}
                <BadgeCheck className="ml-1 text-green-500 w-3 h-3 md:w-4 md:h-4" />
              </span>
              <span className="text-zinc-400 text-xs md:text-sm flex items-center">
                <Dot className="w-4 h-4" />
                {new Date(comment.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
              </span>
            </div>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};
