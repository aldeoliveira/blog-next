import { getAllPosts } from 'data/posts/get-all-posts';
import { getPost } from 'data/posts/get-post';
import { PostData } from 'domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next/types';

export type DynamicPostProps = {
  post: PostData;
};

// Nosso componente
export default function DynamicPost({ post }: DynamicPostProps) {
  return (
    <div>
      <h1>Id</h1>
      <p>{post.title}</p>
    </div>
  );
}

// Pega todos os ids de todos os posts banco
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: false,
  };
};

// Recebe o id do post
export const getStaticProps: GetStaticProps = async (ctx) => {
  const post = await getPost(ctx.params.id);

  return {
    props: { post },
  };
};
