<script>
  // Styling
  import { date_str } from "$lib/posts.js";
  import { base } from "$app/paths";
  export let data; // data obtained from +posts
</script>

<svelte:head>
  <title>Posts by date</title>
</svelte:head>

<h1>Posts by date</h1>

{#each [...Object.entries(data)].reverse() as [year, post_list]}
  <div class="content-container">
    <h2 id="year{year}">{year}</h2>
    <ul>
      {#each post_list as post}
        <li>
          <a href="{base}{post.path}">{post.meta.title} </a> ({date_str(
            new Date(post.meta.date)
          )})<br />
          {post.meta.description ? post.meta.description : ""}
        </li>
      {/each}
    </ul>
  </div>
{/each}

<div class="toc">
  <ul>
    {#each [...Object.entries(data)].reverse() as [year, _]}
      <li><a href="#year{year}">{year}</a></li>
    {/each}
  </ul>
</div>

<style>
  h1 {
    text-align: center;
    padding-top: 1.5em;
    padding-bottom: 1.2em;
    font-size: 36pt;
  }
  .toc:before {
    /* Overwrite the header for this section */
    content: "Quick link";
  }
</style>
