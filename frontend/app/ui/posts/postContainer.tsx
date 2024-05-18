"use client";

import { PostType } from "@/app/lib/definitions";
import Post from "./post";
import { useSearchParams } from "next/navigation";

export default function PostContainer({ posts }: { posts: any }) {
  const searchParams = useSearchParams();
  const tags = searchParams.get("tags")?.split(",") || [];

  const filteredPosts = posts.filter((post: PostType) => {
    if (tags.length === 0) return true;
    return tags.some((tag) => post.tags.includes(tag));
  });
  return (
    <>
      {filteredPosts.map((post: PostType) => {
        return <Post data={post} key={post.id} />;
      })}
    </>
  );
}
