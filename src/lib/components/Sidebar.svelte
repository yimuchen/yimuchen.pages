<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faChevronLeft,
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";

  var showSideBar = true;
  const toggleSideBar = () => {
    document
      .getElementById("side-toggler-show")
      .style.setProperty("display", showSideBar ? "none" : "inherit");
    document
      .getElementById("side-toggler-hide")
      .style.setProperty("display", showSideBar ? "inherit" : "none");
    const slider = document.getElementsByClassName("side-bar-slider");
    for (const s of slider) {
      s.setAttribute("data-show", showSideBar ? "show" : "hide");
    }
    showSideBar = !showSideBar;
  };

  onMount(() => {
    showSideBar = window.innerHeight > window.innerWidth ? false : true;
    console.log(showSideBar);
    toggleSideBar();
  });
</script>

<div class="side-bar">
  <button on:click={toggleSideBar}>
    <div id="side-toggler-hide">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
    <div id="side-toggler-show">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  </button>
  <div class="side-bar-button"></div>
  <div class="side-bar-slider">
    <div class="side-bar-content">
      <h2 class="side-bar-header">Outline</h2>
      <div id="side-bar-list">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .side-bar {
    position: fixed;
    right: 0px;
    top: 50%;
    transform: translate(0, -50%); /* So the at the vertical center is used*/
    z-index: 10000; /*So that it is always on top of the content */
    padding: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-weight: bold;
    background: var(--theme-container-bkg-color);
    box-shadow: 0 0 10px 10px var(--theme-dark-shadow-color);
    display: flex;
    overflow-x: hidden;
  }
  .side-bar button {
    font-size: 0.8em;
  }
  .side-bar h2 {
    font-size: 1.4em;
    padding-bottom: 0.2em;
  }
  .side-bar-content {
    width: 400px;
    font-size: 1.2em;
    padding: 1em;
  }
</style>
