"use client";

import { usePosts } from "../PostsContext";
import { useEffect, useState } from "react";

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const { posts } = usePosts();

  useEffect(() => {
    const fetchPost = async () => {
      const resolvedParams = await params; // Ожидаем params
      const { id } = resolvedParams;

      // Ищем пост в состоянии
      const foundPost = posts.find((p) => p.id === parseInt(id));
      setPost(foundPost || null);
    };

    fetchPost();
  }, [params, posts]);

  if (!post) {
    return <p>Post not found or still loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>{post.id}</div>
    </div>
  );
}
