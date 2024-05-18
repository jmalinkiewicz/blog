"use client";

import { useRef, useState, useEffect } from "react";
import ChevronIcon from "../icons/chevron";
import Tag from "./tag";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function TagCarousel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tags = ["tech", "life", "books", "gaming", "movies", "travel", "food"];
  const [activeTags, setActiveTags] = useState<string[]>(
    searchParams.get("tags")?.split(",") || []
  );

  function handleClick(tag: string) {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  }

  useEffect(() => {
    if (activeTags.length === 0) {
      router.push(pathname);
      return;
    } else {
      router.push(`${pathname}?tags=${activeTags.join(",")}`);
    }
  }, [activeTags]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    scrollContainerRef.current?.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="pr-1 hover:cursor-pointer" onClick={() => scroll(-70)}>
          <ChevronIcon to="left" />
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-hidden self-center"
        >
          {tags.map((tag, key) => (
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                handleClick(tag);
              }}
              key={key}
            >
              <Tag isActive={activeTags.includes(tag)}>{tag}</Tag>
            </div>
          ))}
        </div>
        <div className="pl-1 hover:cursor-pointer" onClick={() => scroll(70)}>
          <ChevronIcon to="right" />
        </div>
      </div>
    </>
  );
}
