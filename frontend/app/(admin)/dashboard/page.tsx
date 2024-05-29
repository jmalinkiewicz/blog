import { getPosts } from "@/app/lib/getData";
import ManagePostsContainer from "@/app/ui/posts/managePostsContainer";
import PostContainer from "@/app/ui/posts/postContainer";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="mt-32 max-w-[550px] overflow-hidden flex-grow">
      <div className="flex w-full mb-4">
        <Link
          className="bg-blue-400 hover:bg-blue-500 px-4 py-1.5 rounded-md text-white"
          href="#"
        >
          New Post
        </Link>
      </div>
      <ManagePostsContainer posts={posts} />
    </div>
  );
}
