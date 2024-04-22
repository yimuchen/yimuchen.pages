<script>
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

  import { isLightTheme } from "$lib/styles/storeTheme.js";

  let show_menu = false;

  onMount(() => {
    // Setting up the hiding pattern
    document.body.addEventListener("click", (_) => {
      show_menu = false;
    });

    // Finding the current theme based on cusston stored results
    var current_theme = localStorage.getItem("data-theme");
    if (current_theme === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        current_theme = "dark";
      } else {
        current_theme = "light";
      }
    }
    $isLightTheme = (current_theme == "light");

    isLightTheme.subscribe((value) => {
      document
        .querySelector("html")
        .setAttribute("data-theme", value ? "light" : "dark");
      localStorage.setItem("data-theme", value ? "light" : "dark");
    });
  });
</script>

{#if !show_menu}
  <button
    id="showButton"
    on:click={(event) => {
      show_menu = true;
      event.stopPropagation();
    }}
  >
    <FontAwesomeIcon icon={faBars} />
  </button>
{/if}

{#if show_menu}
  <nav
    id="navbox"
    transition:fly
    on:click={(event) => {
      event.stopPropagation();
    }}
    on:keypress={(_) => {}}
  >
    <img src="https://avatars.githubusercontent.com/u/11703644" alt="Avatar" />
    <span><a href="{base}/">Home</a></span>
    <span><a href="{base}/about">About Me</a></span>
    <span><a href="{base}/posts">Posts by date</a></span>
    <span><a href="{base}/tags">Posts by tags</a></span>
    <span><a href="{base}/tags">Online tools</a></span>
    <span style="margin-top: 1em;">
      <FontAwesomeIcon icon={faMoon} />
      <label class="switch">
        <input type="checkbox" bind:checked={$isLightTheme} />
        <span class="slider"></span>
      </label>
      <FontAwesomeIcon icon={faSun} />
    </span>
  </nav>
{/if}

<style>
  #showButton {
    position: fixed;
    top: 30px;
    left: 30px;
    font-size: 2em;
    border: hidden;
    margin: auto;
    padding: 0.1em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    border-radius: 5px;
    text-align: center;
    display: inline;
    z-index: 10000;


    /** color shifts */
    color: var(--theme-text-color);
    background-color: var(--theme-container-bkg-color);
    box-shadow: 0px 0px 5px 5px var(--theme-light-shadow-color);
  }


  nav {
    position: fixed;
    width: 200px;
    display: flexbox;
    top: 30px;
    left: 30px;
    padding: 2em;
    border-radius: 20px;
    border-top-left-radius: 5px;
    box-shadow: 0 0 40px var(--theme-light-shadow-color);
    text-align: center;
    z-index: 100000;

    /** color shifts */
    color: var(--theme-text-color);
    background-color: var(--theme-container-bkg-color);
  }

  nav img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 20px;
    aspect-ratio: 1;
    display: flex;
  }

  nav span {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2em;
  }

  a {
    text-decoration: none;
    font-size: 1.2em;
    color: inherit;
  }

  /* Sliding check point */
  .switch {
    position: relative;
    display: inline-block;
    width: 1.5em;
    height: 1em;
    margin-left: 1em;
    margin-right: 1em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #222;
    transition: var(--theme-transition-time);
    border-radius: 0.7em;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    left: 0.3em;
    background-color: white;
    transition: var(--theme-transition-time);
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(0.8em);
  }
</style>
