import { getPosts } from "./lib/getData";
import Post from "./ui/posts/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mt-[98px] max-w-[550px]">
      <div className="px-5 flex flex-col gap-12">
        {posts.map((post: any, key: any) => {
          return <Post data={post} key={key} />;
        })}
        {/* {JSON.stringify(posts)} */}
      </div>
    </main>
  );
}
