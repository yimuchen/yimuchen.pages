import { fetch_posts } from '$lib/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const all_posts = await fetch_posts();

  const sorted_posts = all_posts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sorted_posts);
};
