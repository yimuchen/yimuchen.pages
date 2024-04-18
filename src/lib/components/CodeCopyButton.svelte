<script>
  /**
   * Injecting the production of the copy button for all shiki processed <pre/>
   * containers. Solution adapted from https://github.com/pngwn/MDsveX/issues/385#issuecomment-1444058622
   */
  import { onMount } from "svelte";

  onMount(() => {
    // will add a children to any <pre> element with class language-*
    let pre_elements = document.getElementsByTagName("pre");
    for (let pre of pre_elements) {
      const class_list = [...pre.classList];
      if (!class_list.some((el) => el.startsWith("shiki"))) {
        continue;
      }

      const pclass_list = [...pre.parentElement.classList];
      if (pclass_list.some((el) => el == "code-copyable")) {
        const text = pre.innerText;
        let copyButton = document.createElement("button");
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(text);
          copyButton.innerText = "Copied!";
          setTimeout(() => {
            copyButton.innerText = "copy";
          }, 700);
        });
        copyButton.className = "code-block-copy";
        copyButton.innerText = "copy";
        pre.appendChild(copyButton);
      }

      // Modifying the start line (currently not working??
      const class_idx = pclass_list.findIndex((x) =>
        x.startsWith("numbered-start-")
      );
      if (class_idx != -1) {
        let code = pre.firstChild;
        code.style["counter-reset"] = 10;
      }
    }
  });
</script>

<slot />
