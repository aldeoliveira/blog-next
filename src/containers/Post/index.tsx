import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Heading } from 'components/Heading';
import { MainContainer } from 'components/MainContainer';
import { PostCover } from 'components/PostCover';
import { PostData } from 'domain/posts/post';
import { useEffect, useState } from 'react';

export type PostProps = {
  post: PostData;
};

const getRandomCoverUrl = (): string => {
  const id = Math.floor(Math.random() * 100) + 1;
  return `https://picsum.photos/id/${id}/2000/1000`;
};

export const Post = ({ post }: PostProps) => {
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    const url = getRandomCoverUrl();
    setCoverUrl(url);
  }, []);

  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={coverUrl} alt={post.title} />
        <div>{post.content}</div>
      </MainContainer>

      <Footer />
    </>
  );
};
