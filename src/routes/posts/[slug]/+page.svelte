<script>
  // Styling files
  import CopyCodeButton from "$lib/components/CodeCopyButton.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { date_str } from "$lib/posts.js";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  export let data;

  const banner_style = data.banner
    ? `background-image: url("${base}/image/banner/${data.banner}");`
    : ``;

  /* Extract the TOC contents an add it to the new side-bar container */
  onMount(() => {
    const tocs = document.getElementsByClassName("toc");
    const sidebar = document.getElementById("side-bar-list");
    for (const toc of tocs) {
      sidebar.innerHTML += toc.innerHTML;
    }
  });
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
  <footer>
    <span class="foot-header">Tags</span><br />
    {#each data.tags as tag}
      <span><a href="{base}/tags/#{tag}">{tag}</a></span>
    {/each}
  </footer>
{/if}

<Sidebar />

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
    display: flex;
    flex-wrap:wrap;
    justify-content: center;

    /** color-styling */
    background-color: var(--theme-container-bkg-color);
  }

  footer span {
    padding-left: 2em;
    padding-right: 2em;
    text-transform: capitalize;
    font-variant: small-caps;
  }

  footer .foot-header {
    width: 100%;
  }
</style>
