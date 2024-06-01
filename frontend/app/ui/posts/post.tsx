import Image from "next/image";
import Tag from "../tags/tag";
import Link from "next/link";
import { PostType } from "@/app/lib/definitions";

export default function Post({ data }: { data: PostType }) {
  const dateStr = String(new Date(data.publishedOn));
  const words = dateStr.split(" ");
  const firstTwoWords = words.slice(1, 3).join(" ");

  return (
    <div className="flex py-4 flex-col gap-4 border-b-[1px] border-shark-950/50">
      <div className="flex flex-col gap-3">
        {data.thumbnailUrl ? (
          <Link href={data.slug}>
            <Image
              src={data.thumbnailUrl}
              width={486}
              height={180}
              alt="thumbnail image"
              className="h-[180px] w-full object-cover"
              priority
            />
          </Link>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="text-[12px] text-shark-500 dark:text-shark-300 flex justify-between">
              <h4>{data.author.name}</h4>
              <h4>{firstTwoWords}</h4>
            </div>
            <h2 className="text-[22px] font-semibold hover:text-shark-950/80 dark:hover:text-white/85">
              <Link href={data.slug}>{data.title}</Link>
            </h2>
          </div>
          <p className="text-[14px] hyphens-auto leading-snug">
            {data.description}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {data.tags.map((tag: string, key: any) => {
          return <Tag key={key}>{tag}</Tag>;
        })}
      </div>
    </div>
  );
}
