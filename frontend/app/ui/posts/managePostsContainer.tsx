import { PostType } from "@/app/lib/definitions";
import Post from "./post";
import PostManagerCard from "./postManagerCard";

export default function ManagePostsContainer({ posts }: { posts: PostType[] }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {posts.length > 0 ? (
          posts.map((post: PostType) => {
            return <PostManagerCard post={post} key={post.id} />;
          })
        ) : (
          <h1>no posts found</h1>
        )}
      </div>
    </>
  );
}
