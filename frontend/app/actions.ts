"use server";

import { cookies } from "next/headers";

export async function createPost(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    thumbnailUrl: formData.get("thumbnailUrl"),
    tags: (formData.get("tags") as string).split(","),
    metaTitle: formData.get("metaTitle"),
    metaDescription: formData.get("metaDescription"),
    content: formData.get("content"),
  };

  const response = await fetch("http://localhost:8000/api/posts", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${cookies().get("token")?.value}`,
    },
    body: JSON.stringify(rawFormData),
  });

  console.log(await response.json());
}

export async function deletePost(postId: string) {
  const response = await fetch(`http://localhost:8000/api/posts/${postId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Cookie: `token=${cookies().get("token")?.value}`,
    },
  });

  console.log(await response.json());
}
