import { PostType } from "@/app/lib/definitions";
import Link from "next/link";

export default function PostManagerCard({ post }: { post: PostType }) {
  return (
    <div className="w-full bg-blue-100 p-4 flex flex-col gap-4 rounded-md">
      <h1>{post.title}</h1>
      <div className="flex gap-4">
        <Link
          className="bg-yellow-300 hover:bg-yellow-400 px-4 py-1.5 rounded-md"
          href="#"
        >
          Edit
        </Link>
        <Link
          className="bg-red-400 hover:bg-red-500 px-4 py-1.5 rounded-md"
          href="#"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
