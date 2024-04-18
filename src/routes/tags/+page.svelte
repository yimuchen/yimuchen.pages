<script>
  // Styling
  import { date_str } from "$lib/posts.js";
  import { base } from "$app/paths";
  export let data; // data obtained from +posts

  const post_grouping = [...Object.entries(data)];
  post_grouping.sort();
</script>

<svelte:head>
  <title>Posts by tag</title>
</svelte:head>

<h1>Posts by tags</h1>

{#each post_grouping as [tag, post_list]}
  <div class="content-container">
    <h2 id={tag} style="text-transform: capitalize;">{tag}</h2>
    <ul>
      {#each post_list as post}
        <li>
          <a href="{base}{post.path}">{post.meta.title} </a> ({date_str(
            new Date(post.meta.date)
          )})
        </li>
      {/each}
    </ul>
  </div>
{/each}

<div class="toc">
  <ul>
    {#each post_grouping as [tag, _]}
      <li><a href="#{tag}">{tag}</a></li>
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
  .toc li {
    text-transform: capitalize;
  }
  .toc:before {
    /* Overwrite the header for this section */
    content: "Quick link";
  }
</style>
