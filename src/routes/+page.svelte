<script>
  import { date_str } from "$lib/posts.js";
  import { base } from "$app/paths";
  export let data;
</script>

<svelte:head>
  <title>YMEC's blog</title>
</svelte:head>

<h1>YMEC's blog</h1>

<div class="content-container">
  <p>
    Hi! Welcome to the blogs written by Yi-Mu (Enoch) Chen, which contains
    various discussions of physics/technology/mathematics related items that I
    personally found interesting when doing my work or for my hobby poking
    around in various spaces. The posts here are usually self contained or
    smaller-scale projects that still feels resonable to fit within a single
    markdown file, though if there are significant large projects that I think
    is worth mentioning, I will likely include a link here. Feel free to check
    out my full repository on
    <a href="https://github.com/yimuchen">GitHub</a>, or checkout more
    information below! You can also navigate back or somewhere else via the
    hamburger menu (☰) pined on the top left of the page.
  </p>

  <ul>
    <li>
      <a href="{base}/about/">About myself</a>: more detailed information about
      myself in case you want to know more about why I post the topics that I am
    </li>
    <li>
      <a href="{base}/posts/">Posts by date</a>: all published posts in
      chronological order.
    </li>
    <li>
      <a href="{base}/tags/">Posts by tags</a>: Posts that are losely ordered
      according to the related topics.
    </li>
    <li>
      <a href="{base}/tags/">Tools</a>: Some fun single-page tools that I
      developed for some odd issues I ran into.
    </li>
  </ul>

  <h4>Most Recent Posts</h4>
  <ul>
    {#each data.posts as p}
      <li>
        <a href="{base}{p.path}">{p.meta.title}</a>
        <span>(Posted: {date_str(new Date(p.meta.date))})</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  h1 {
    text-align: center;
    font-size: 56pt;
    color: var(--theme-header-txt-color);
  }
  .content-container p {
    font-size: 18pt;
  }

  .content-container h4 {
    font-size: 20pt;
  }
  .content-container ul {
    font-size: 18pt;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  ul a {
    font-weight: bold;
  }

  .content-container li {
    margin-top: 0.5em;
  }
</style>
