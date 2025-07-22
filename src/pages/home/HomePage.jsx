import { NewPost } from "../../components/post/NewPost";
import { Post } from "../../components/post/Post";
import { Suggestion } from "../../components/suggestion/Suggestion";
const posts = [
  {
  user: {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    username: "Social Admin",
    time: "3h ago",
  },
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&s",
  ],

  caption:
    "Đi làm rồi thì hay có time ✨",
},
{user: {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    username: "Admin",
    time: "3h ago",
  },
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjNpt7mV0bJ6BxvMN4D09lhUaiUcW8i5UwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNfsPHUOpXCrvgz2zvBS3_GuG1efiESamw&s",
  ],

  caption:
    "Đi làm rồi thì hay có thói quen time-laspe quay coi mình làm việc sao mà thấy nói là chủ yếu ☺️ Nhưng mà…bên MISA HCM đang tuyển job Nhân viên Kinh doanh - không yêu cầu kinh nghiệm - mom nào newbie/fresher mà giao tiếp tốt thì về với đội của tôi ✨",
},
]
export const HomePage = () => {

  return (
    <div className="flex">
      <div className="flex-1 px-6 py-4 max-w-2xl mx-auto">
        <div className="border min-h-screen border-b-wt dark:border-zinc-700 rounded-t-4xl">
          {/* new post */}
          <NewPost />
          {/* list post */}
          {posts.map((post, index) => (
            
            <Post key={index} post={post}/>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="hidden lg:block w-80 p-4">
        <Suggestion />
      </div>
    </div>
  );
};
