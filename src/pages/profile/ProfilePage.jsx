import { Post } from "../../components/post/Post";
import { NewPost } from "../../components/post/NewPost";

export const ProfilePage = () => {
  return (
    <>
      <NewPost />
      <Post post={null}/>
    </>
  );
};
