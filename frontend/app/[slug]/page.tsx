import { notFound } from "next/navigation";
import { PostType } from "../lib/definitions";
import { getPost } from "../lib/getData";

export async function generateStaticParams() {
  const posts = await fetch("http://localhost:8000/api/posts").then((res) =>
    res.json()
  );

  return posts.map((post: PostType) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: any }) {
  const post = await getPost(params.slug);
  console.log(post);

  if (!post) {
    notFound();
  }

  return <div className="mt-48">{JSON.stringify(post)}</div>;
}
