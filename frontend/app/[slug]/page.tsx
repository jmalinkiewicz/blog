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

  const markdown = `JavaScript is all about responsiveness. It powers the dynamic elements that make web pages feel alive. But what happens when your code needs to wait for something external, like fetching data from a server? This is where asynchronous operations come in, and with them, the potential for messy callback hell.
  
  Enter async/await, a powerful duo that simplifies asynchronous programming in JavaScript. But why exactly do we need them? Let's dive in!
  
  ## 1. Farewell, Callback Hell:
  
  Imagine you have multiple asynchronous operations chained together, like fetching data and then updating the UI. Traditional callbacks can quickly turn your code into a labyrinth of nested functions, making it difficult to read and maintain. async/await offers a cleaner approach.
  
  ## 2. Writing Asynchronous Code Like Synchronous Code:
  
  With async/await, you can write asynchronous code that looks synchronous. You use the async keyword to declare a function that can handle asynchronous operations. Then, you use the await keyword in front of promises to pause the function's execution until the promise resolves. This makes the code flow more intuitive.
  
  ## 3. Error Handling Made Easy:
  
  Async/await allows you to use try/catch blocks for error handling within asynchronous code. This makes it easier to catch and handle errors gracefully, improving the robustness of your application.
  
  ## 4. Improved Readability and Maintainability:
  
  By avoiding callback hell, async/await makes your code easier to understand and maintain. This is especially beneficial for complex asynchronous operations that span multiple lines of code.
  
  ## So, When Should You Use Async/Await?
  
  Async/await shines whenever you're dealing with asynchronous operations like fetching data, working with APIs, or handling user interactions. It's a fantastic tool for keeping your JavaScript code clean, readable, and maintainable.
  
  ## Ready to Embrace Async/Await?
  
  There are plenty of resources available to help you get started with async/await. With a little practice, you'll be writing elegant and efficient asynchronous code in no time. Now, go forth and conquer the asynchronous world!
  
  Some features of async/await include:
  * Cleaner code with less nesting
  * Easier error handling with try/catch
  
  As well as:
  1. Synchronous-looking code
  2. Error handling with try/catch
  
  Here is some javascript code:
  
  ~~~js
  const keyword = "kupa";

  export default function gowno(keyword) {
    return keyword;
  };
  ~~~`;

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
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
