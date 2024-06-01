"use client";

import { components } from "@/app/lib/markdownComponents";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { createPost, editPost } from "@/app/actions";
import { PostType } from "@/app/lib/definitions";
import { getPost } from "@/app/lib/getData";

export default function Page({ params }: { params: { slug: string } }) {
  const [markdown, setMarkdown] = useState<string | undefined>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tags, setTags] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(params.slug);
      setMarkdown(post.content.replace(/\\n/g, "\n"));
      setTitle(post.title);
      setDescription(post.description);
      setThumbnailUrl(post.thumbnailUrl);
      setTags(post.tags);
      setMetaTitle(post.metaTitle);
      setMetaDescription(post.metaDescription);
      setId(post.id);
    };
    fetchPost();
  }, []);
  return (
    <div className="flex-grow w-full flex pt-32 max-h-screen overflow-hidden">
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2">
          <Editor
            value={markdown}
            onChange={(value, event) => setMarkdown(value)}
          />
        </div>
        <form action={editPost} className="max-w-lg">
          <input name="id" value={id} />
          <input name="content" value={markdown?.replace(/\n/g, "\\n")} />
          <label className="flex flex-col">
            <span>Title</span>
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label className="flex flex-col">
            <span>Description</span>
            <input
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label className="flex flex-col">
            <span>Thumbnail URL</span>
            <input
              name="thumbnailUrl"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label className="flex flex-col">
            <span>tags</span>
            <input
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label className="flex flex-col">
            <span>metaTitle</span>
            <input
              name="metaTitle"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <label className="flex flex-col">
            <span>metaDescription</span>
            <input
              name="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="p-2"
              type="text"
              placeholder="Title"
            />
          </label>
          <button className="p-2 bg-blue-500 text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <div className="max-w-[550px] max-h-full mx-auto overflow-scroll">
          <ReactMarkdown
            className={"flex flex-col gap-4"}
            components={components}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
