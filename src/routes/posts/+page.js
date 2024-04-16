import { base } from "$app/paths";

// To be ran before the ran before the data 
export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/posts`);
  const posts = await response.json();

  return {
    posts
  };
};
