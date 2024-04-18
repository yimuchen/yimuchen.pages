import { base } from "$app/paths";

// To be ran before the ran before the data
export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/posts`);
  const posts = await response.json();

  // Grouping by year ussing associative array
  var grouping = {};
  for (const p of posts) {
    const date = new Date(p.meta.date)
    const year = date.getFullYear()
    if (!(year in grouping)) {
      grouping[year] = [];
    }
    grouping[year].push(p);
  }
  for (const year in grouping) {
    grouping[year].sort((lhs, rhs) => { return lhs.meta.date < rhs.meta.date; })
  }

  return grouping;
};
