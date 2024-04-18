<script>
  // Styling files
  import CopyCodeButton from "$lib/components/CodeCopyButton.svelte";
  import { date_str } from "$lib/posts.js";
  import { base } from "$app/paths";
  export let data;

  const banner_style = data.banner
    ? `background-image: url("${base}/image/banner/${data.banner}");`
    : ``;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<header style={banner_style}>
  <h1>{data.title}</h1>
  <p>{date_str(data.date)}</p>
</header>

<article class="content-container">
  <CopyCodeButton>
    <svelte:component this={data.content} />
  </CopyCodeButton>
</article>

{#if data.tags}
  <footer class="content-footer">
    <span>Tags</span><br />
    {#each data.tags as tag}
      <span><a href="{base}/tags/#{tag}">{tag}</a></span>
    {/each}
  </footer>
{/if}

<style>
  header {
    width: 100%;
    padding-top: 5em;
    padding-bottom: 0.3em;
    text-align: center;
    color: white;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  header h1 {
    font-weight: bolder;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  footer {
    margin: auto;
    max-width: 50em;
    text-align: center;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-top: 1.6em;
    margin-bottom: 1.5em;
    border-radius: 15px;

    /** color-styling */
    background-color: var(--theme-container-bkg-color);
  }

  footer span {
    padding: 2em;
    text-transform: capitalize;
    font-variant: small-caps;
  }
</style>
