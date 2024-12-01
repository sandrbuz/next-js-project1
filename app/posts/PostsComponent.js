"use client";

import Link from "next/link";
import { usePosts } from "./PostsContext";

export default function PostsComponent() {
  const { posts } = usePosts();

  return (
    <div>
      <h2>Posts:</h2>
      <p>client routing (local context)</p>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
