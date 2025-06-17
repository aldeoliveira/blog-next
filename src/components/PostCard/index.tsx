import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';
import { useEffect, useState } from 'react';

export type PostCardProps = {
  id: number;
  title: string;
};

const getRandomCoverUrl = (): string => {
  const id = Math.floor(Math.random() * 100) + 1;
  return `https://picsum.photos/id/${id}/500/500`;
};

export const PostCard = ({ id, title }: PostCardProps) => {
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    const url = getRandomCoverUrl();
    setCoverUrl(url);
  }, []);

  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[id]" as={`/post/${id}`}>
          <a>
            <img src={coverUrl} alt={title} />
          </a>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[id]" as={`/post/${id}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
