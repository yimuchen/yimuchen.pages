/**
 * Getting the information of the post that is required for displaying the contents
 * */
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const date = new Date(params.slug.slice(0, 10));
  const content = post.default;
  const { title, banner, tags } = post.metadata;

  return {
    content,
    title,
    tags,
    banner,
    date,
  };
}
