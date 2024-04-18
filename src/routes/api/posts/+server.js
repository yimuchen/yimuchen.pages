import { fetch_posts } from '$lib/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  // The Get method here is just a transparent pass through. Sorting will be
  // handled by the subsequent methods
  const all_posts = await fetch_posts();
  return json(all_posts);
};
