import { base } from "$app/paths";

// To be ran before the ran before the data
export const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/posts`);
  const posts = await response.json();

  // Grouping by year tag associative array
  var grouping = {};
  for (const p of posts) {
    const date = new Date(p.meta.date);
    const tags = p.meta.tags;
    if (!tags) {
      continue;
    }

    for (const t of tags){
      if(!(t in grouping)){
        grouping[t] = [];
      }
      grouping[t].push(p);
    }
  }
  
  for (const t in grouping) {
    grouping[t].sort((lhs, rhs) => {
      return lhs.meta.date < rhs.meta.date;
    });
  }

  return grouping;
};
