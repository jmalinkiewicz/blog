import { notFound } from "next/navigation";
import { PostType } from "../lib/definitions";
import { getPost } from "../lib/getData";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React from "react";
import { components } from "../lib/markdownComponents.jsx";

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

  // Replace all the \n with new lines
  const content = post.content.replace(/\\n/g, "\n");

  return (
    <main className="mt-32 max-w-[550px] overflow-hidden flex-grow px-5">
      <div className="flex py-4 flex-col gap-4">
        <div className="flex flex-col gap-3">
          {post.thumbnailUrl ? (
            <Image
              src={post.thumbnailUrl}
              width={486}
              height={180}
              alt="thumbnail image"
              className="h-[180px] w-full object-cover"
              priority
            />
          ) : (
            ""
          )}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="text-[12px] text-shark-500 dark:text-shark-300 flex justify-between">
                <h4>{post.author.name}</h4>
                <h4>April 10</h4>
              </div>
              <h2 className="text-[24px] font-semibold hover:text-shark-950/80 dark:hover:text-white/85">
                {post.title}
              </h2>
            </div>
          </div>
          <div>
            <ReactMarkdown
              className={"flex flex-col gap-4"}
              components={components}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
