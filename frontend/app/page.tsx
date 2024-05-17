import { getPosts } from "./lib/getData";

export default async function Home() {
  const posts = await getPosts();

  return <main className="mt-[98px]">{JSON.stringify(posts)}</main>;
}
