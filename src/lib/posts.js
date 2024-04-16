export const fetch_posts = async () => {
  const post_globs = import.meta.glob('/src/routes/posts/*.md');
  const iterable_posts = Object.entries(post_globs);

  const allPosts = await Promise.all(
    iterable_posts.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const post_path = path.slice(11, -3);

      return {
        meta: metadata,
        path: post_path
      };
    })
  );

  return allPosts;
};
