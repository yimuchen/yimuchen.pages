<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faBlog } from "@fortawesome/free-solid-svg-icons";

  export let data;
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

  <h2>UNDER CONSTRUCTION</h2>
  <!--
  {#each data.toolkit as tool}
    <div class="experience-container">
      <div class="experience-header">
        <div class="experience-logo">
          <img src={tool.metadata.logo} alt={tool.metadata.name} />
        </div>
        <div class="experience-headtext">
          <span class="experience-title">{tool.metadata.name}</span>
          <span class="experience-prof">{tool.metadata.proficiency}</span>
        </div>
      </div>
      <div class="experience-content">
        <svelte:component this={tool.default} />
      </div>
    </div>
  {/each}
  -->
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
