import { POSTS_URL } from 'config/app-config';
import { PostData } from 'domain/posts/post';
import { fetchJson } from 'utils/fetch-json';

export const getPost = async (id: string | string[]): Promise<PostData> => {
  const idString = Array.isArray(id) ? id[0] : id;
  const url = `${POSTS_URL}/${idString}`;
  const jsonPost = await fetchJson<PostData>(url);

  return jsonPost;
};
