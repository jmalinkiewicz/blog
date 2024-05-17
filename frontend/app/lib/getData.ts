// export async function getPosts() {
//   const res = await fetch("http://localhost:8000/api/posts", {
//     next: {
//       tags: ["posts"],
//     },
//   });
//   const data = await res.json();

//   return data;
// }

export async function getPosts() {
  const res = await fetch("http://localhost:8000/api/posts", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}
