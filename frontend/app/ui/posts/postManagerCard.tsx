"use client";

import { deletePost } from "@/app/actions";
import { PostType } from "@/app/lib/definitions";
import Link from "next/link";
import { useState } from "react";

export default function PostManagerCard({ post }: { post: PostType }) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  return (
    <div className="w-full bg-blue-100 dark:bg-slate-600 p-4 flex flex-col gap-4 rounded-md">
      <h1>{post.title}</h1>
      <div className="flex gap-4">
        {!isDeleteMode ? (
          <>
            <Link
              className="bg-yellow-300 hover:bg-yellow-400 dark:text-black px-4 py-1.5 rounded-md"
              href={`/dashboard/edit/${post.slug}`}
            >
              Edit
            </Link>
            <button
              onClick={(e) => setIsDeleteMode(true)}
              className="bg-red-400 hover:bg-red-500 px-4 py-1.5 rounded-md"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => {
                deletePost(post.id);
                setIsDeleteMode(false);
              }}
              className="bg-red-400 hover:bg-red-500 px-4 py-1.5 rounded-md"
            >
              Confirm Delete
            </button>
            <button
              onClick={(e) => setIsDeleteMode(false)}
              className="hover:bg-blue-300 px-4 py-1.5 rounded-md"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
