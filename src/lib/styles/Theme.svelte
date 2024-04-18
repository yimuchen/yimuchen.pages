<script>
  import { onMount } from "svelte";
  import { isLightTheme } from "$lib/styles/storeTheme.js";

  const theme_values = {
    // Value : [light, dark]
    "text-color": ["black", "white"],
    "body-color": ["#FFF", "#222"],
    "container-txt-color": ["black", "#EEE"],
    "container-bkg-color": ["#EEE", "#333"],
    "link-none": ["blue", "#8df"],
    "link-visit": ["purple", "#d8f"],
    "header-txt-color": ["#C60", "#f80"],
    "dark-shadow-color": ["#181818", "#181818"],
    "light-shadow-color": ["#FFF", "#AAA"],
  };
  onMount(() => {
    isLightTheme.subscribe((isLight) => {
      const gstyle = document.documentElement.style;

      for (const [key, value] of Object.entries(theme_values)) {
        gstyle.setProperty(`--theme-${key}`, isLight ? value[0] : value[1]);
      }
    });
  });
</script>

<slot />

<style>
  :global(:root) {
    /** setting up dark theme by default */
    --theme-text-color: white;
    --theme-body-color: #222;
    --theme-container-txt-color: #ee;
    --theme-container-bkg-color: #333;
    --theme-link-none: "#8df";
    --theme-link-visit: "#d8f";
    --theme-header-txt-color: "#f80";
    --theme-dark-shadow-color: "#181818";
    --theme-light-shadow-color: "#AAA";
  }
  :global(body) {
    color: var(--theme-text-color);
    background-color: var(--theme-body-color);
  }

  :global(.content-container) {
    /* Coloring */
    background-color: var(--theme-container-bkg-color);
    color: var(--theme-container-txt-color);
  }

  :global(a) {
    color: var(--theme-link-none);
  }

  :global(a:visited) {
    color: var(--theme-link-visit);
  }

  :global(
      .content-container h1,
      .content-container h2,
      .content-container h3,
      .content-container h4,
      .content-container h5,
      .content-container h6
    ) {
    color: var(--theme-header-txt-color);
  }

  /*Table of contents*/
  :global(.toc) {
    background-color: var(--theme-container-bkg-color);
    box-shadow: 0 0 3px 3px var(--theme-dark-shadow-color);
  }
</style>
