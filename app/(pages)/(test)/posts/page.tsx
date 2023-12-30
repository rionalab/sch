import Link from "next/link";
import React from "react";

// export const dynamic = "force-dynamic";

async function Posts() {
  const rand = Math.floor(Math.random() * 10) + 1;
  const url = "https://dummyjson.com/posts?limit=" + rand;
  const opts: RequestInit = {
    // cache: "no-cache",
    next: {
      revalidate: 3600, // 1h
    },
  };
  const resp = await fetch(url, opts);
  const data = await resp.json();
  const posts: Post[] = data.posts;

  return (
    <div>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        <li>
          <Link href={`/posts/999999`}>NOt found </Link>
        </li>
      </ol>
    </div>
  );
}

interface Post {
  id: number;
  title: string;
}

export default Posts;
