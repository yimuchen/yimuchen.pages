<script>
  import "$lib/styles/layout.css";
  import "$lib/styles/theme.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
  import { config } from "@fortawesome/fontawesome-svg-core";
  import "@fortawesome/fontawesome-svg-core/styles.css";
  config.autoAddCss = false;
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
