import { useEffect, useState } from 'react';
import { PostData } from 'domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('http://localhost:8000/posts');
  const jsonPosts = await posts.json();

  return jsonPosts;
};

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </div>
  );
}
