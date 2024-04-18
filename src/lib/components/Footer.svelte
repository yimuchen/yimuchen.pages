<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<footer>
  <FontAwesomeIcon icon={faGithub} />
  <a href="https://github.com/yimuchen/">Find me on GitHub</a>
</footer>

<style>
  footer {
    width: 100%;
    padding: 1em;
    margin-top: 2em;
    bottom: 0;
    text-align: center;
    
    border-radius: 15px;
    background: var(--theme-container-bkg-color);
  }
</style>
