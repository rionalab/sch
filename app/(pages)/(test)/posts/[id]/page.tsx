"use client";

import React, { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = async () => {
    const resp = await fetch("https://dummyjson.com/posts/" + id);
    const post = await resp.json();

    setPost(post);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(post);

  if (!post) {
    return null;
  }

  if (post && !post.title) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

interface Post {
  body: string;
  title: string;
}

export default Post;
