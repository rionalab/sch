import Link from "next/link";
import React from "react";

async function Posts() {
  const resp = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await resp.json();
  const posts: Post[] = data.posts;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}

interface Post {
  id: number;
  title: string;
}

export default Posts;
