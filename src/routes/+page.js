import { base } from "$app/paths";

// To be ran before the ran before the data
export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/posts`);
  const posts = await response.json();

  // Grouping by year ussing associative array
  posts.sort((lhs, rhs) => {
    const l_date = new Date(lhs.meta.date);
    const r_date = new Date(rhs.meta.date);
    return r_date > l_date;
  });

  return { posts: posts.slice(0,10) };
};
