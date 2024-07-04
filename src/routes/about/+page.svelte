<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faBlog } from "@fortawesome/free-solid-svg-icons";
  import { base } from "$app/paths";

  export let data;
  let selected_tool = "";
  $: tool_index = data.toolkit.findIndex((el)=> el.metadata.name == selected_tool);
  $: tool_display = data.toolkit[tool_index >= 0 ? tool_index : 0];
</script>

<svelte:head>
  <title>About YMEC</title>
</svelte:head>

<h1>About YMEC</h1>

<div class="content-container">
  <div
    style="display: flex; flex-direction:row; align-items: center; width:100%; justify-items: flex-start;"
  >
    <img
      src="https://avatars.githubusercontent.com/u/11703644"
      alt="avatar"
      style="border-radius: 50%; width:200px;"
    />
    <table style="margin-left: 2em; font-size: 1.2em;;">
      <tr>
        <td>Name</td> <td>Yi-Mu "Enoch" Chen</td>
      </tr>
      <tr>
        <td>GitHub <FontAwesomeIcon icon={faGithub} /></td><td
          ><a href="https://github.com/yimuchen">yimuchen</a></td
        >
      </tr>
      <tr>
        <td>Website <FontAwesomeIcon icon={faBlog} /></td><td
          ><a href="https://yimuchen.github.io/yimuchen.pages">yimuchen.pages</a
          ></td
        >
      </tr>
    </table>
  </div>
</div>

<div class="content-container">
  <h2 id="experience">Experience</h2>

  {#each data.experience as exp}
    <div class="experience-container">
      <div class="experience-header">
        <div class="experience-logo">
          <img src={exp.metadata.logo} alt={exp.metadata.position} />
        </div>
        <div class="experience-headtext">
          <span class="experience-title">{exp.metadata.position}</span>
          <span class="experience-time">{exp.metadata.duration}</span>
        </div>
      </div>
      <div class="experience-content">
        <svelte:component this={exp.default} />
      </div>
    </div>
  {/each}
</div>

<div class="content-container">
  <h2 id="toolkit">Toolkit</h2>

  Most of what is displayed here is a quick summary of my technical proficiency
  in terms of computational tools.

  <div class="tool-selector">
    {#each data.toolkit as tool}
      <input
        name="toolkit"
        type="radio"
        id={tool.metadata.name}
        bind:group={selected_tool}
        value={tool.metadata.name}
      />
      <label for={tool.metadata.name}
        ><img
          src={`${base}/image/about/${tool.metadata.logo}`}
          alt={tool.metadata.title}
        /></label
      >
    {/each}
  </div>
    <div class="experience-container">
      <div class="experience-header">
        <div class="toolkit-logo">
          <img
            src={`${base}/image/about/${tool_display.metadata.logo}`}
            alt={tool_display.metadata.title}
          />
        </div>
        <div class="experience-headtext">
          <span class="experience-title">{tool_display.metadata.title}</span>
        </div>
      </div>
      <div class="experience-content">
        <svelte:component this={tool_display.default} />
      </div>
    </div>
</div>

<style>
  h1 {
    text-align: center;
  }

  .content-container h2 {
    text-align: center;
    margin-bottom: 1em;
  }

  .experience-container {
    display: flexbox;
  }
  .experience-container {
    margin-bottom: 1em;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-top-color: white;
    border-top-style: solid;
    border-top-width: 3px;
    border-bottom-color: white;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }
  .experience-header {
    height: 5em;
    display: flex;
    justify-content: left;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom-color: white;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .experience-logo img {
    height: 5em;
    border-radius: 50%;
  }
  .experience-headtext {
    flex-grow: 20;
    padding-left: em;
    position: relative;
  }
  .experience-title {
    position: absolute;
    left: 0;
    top: 10px;
    padding-left: 20px;
    font-size: 20pt;
    font-weight: bolder;
  }
  .experience-time {
    position: absolute;
    left: 0;
    bottom: 10px;
    padding-left: 20px;
  }
  /*
  .experience-prof {
    position: absolute;
    font-style: italic;
    left: 0;
    bottom: 10px;
    padding-left: 20px;
  }*/

  /* For the tool selecting banner */
  .tool-selector {
    text-align: center;
  }
  .tool-selector input[type="radio"] {
    display: none;
  }
  .tool-selector label img {
    width: 50px;
    padding: 15px;
  }
  .tool-selector :checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #666;
    z-index: -1;
  }
  .toolkit-logo img {
    height: 5em;
    border-radius: 0%;
  }

  :global(.toc) {
    display: none;
  }

  td {
    padding-right: 1em;
  }
  td:first-child {
    font-weight: bold;
  }
</style>
