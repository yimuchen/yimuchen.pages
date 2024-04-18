/** Getting a list of all posts and getting their metadata for displaying in a list */
export const fetch_posts = async () => {
  // Because this in done during the build process, we don't need to prepend
  // this with the base method
  const post_globs = import.meta.glob("/src/routes/posts/*.md");
  const iterable_posts = Object.entries(post_globs);

  const all_posts = await Promise.all(
    iterable_posts.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const post_path = path.slice(11, -3);
      metadata.date = new Date(post_path.slice(6, 17));

      return {
        meta: metadata,
        path: post_path,
      };
    })
  );

  return all_posts;
};

export const date_str = (date) => {
  const month_map = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = date.getFullYear();
  const month = month_map[date.getMonth()];
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};
