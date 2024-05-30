"use client";

import { components } from "@/app/lib/markdownComponents";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";

export default function Page() {
  const [markdown, setMarkdown] = useState<string | undefined>("");

  return (
    <div className="flex-grow w-full flex pt-32 max-h-screen overflow-hidden">
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2">
          <Editor
            value={markdown}
            onChange={(value, event) => setMarkdown(value)}
          />
        </div>
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
