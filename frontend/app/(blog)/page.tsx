import { getPosts } from "../lib/getData";
import PostContainer from "../ui/posts/postContainer";
import TagCarousel from "../ui/tags/tagCarousel";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mt-32 max-w-[550px] overflow-hidden">
      <div className="px-5 w-full">
        <TagCarousel />
      </div>
      <div className="px-5 flex flex-col gap-12">
        <PostContainer posts={posts} />
      </div>
    </main>
  );
}
