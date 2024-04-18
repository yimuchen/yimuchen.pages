import { codeToHtml } from "shiki";
import { parse } from "shell-quote";

/**
  * custom highlighting -- 
  * Developed from these sources :
  * https://stackoverflow.com/questions/76909172/custom-highlight-lines-code-block-title-shiki
  * https://rodneylab.com/sveltekit-shiki-syntax-highlighting/
  * **

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
export const highlighter = async (code, lang, meta) => {
  const meta_options = parse_meta_string(meta);

  const html = await codeToHtml(code, {
    lang: lang,
    theme: "monokai",
    transformers: [
      {
        line(node, line) {
          if (meta_options.showLineNumber != null) {
            node.properties["data-line"] = line;
          }
          if (meta_options.highlightLines.includes(line)) {
            this.addClassToHast(node, "highlight");
          }
        },
        postprocess(html_code) {
          var html = html_code.replace(
            /[{}`]/g,
            (character) =>
              ({ "{": "&lbrace;", "}": "&rbrace;", "`": "&grave;" })[character]
          );

          const lang_block = lang
            ? `<span class="code-block-lang">[${lang}]</span>`
            : ``;

          const head_block = meta_options.title || lang
            ? `<div class="code-block-header">${meta_options.title} ${lang_block}</div>`
            : "";
          const block_class =
            meta_options.showLineNumber != null
              ? `code-block-numbered numbered-start-${meta_options.showLineNumber}`
              : "";
          const copy_class = meta_options.allowcopy === true ? "code-copyable" : "";

          console.log(meta_options)

          html = `
            <div class="code-block-container">
              ${head_block}
              <div class="code-block ${block_class} ${copy_class}">${html}</div>
            </div>`;
          return html;
        },
      },
    ],
  });

  return html;
};

/** Returning the meta obejcts into something programatic with additional default options */
function parse_meta_string(meta_str) {
  let meta_options = {
    showLineNumber: null,
    highlightLines: [],
    title: "",
    allowcopy: true,
  };

  if (!meta_str) {
    return meta_options;
  }

  // Additional parsing -- breaking strings like shell breaking
  const meta_tokens = parse(meta_str);

  const ln = meta_tokens.findIndex((x) => x.startsWith("showLineNumber"));
  if (ln != -1) {
    meta_options.showLineNumber = Number(meta_tokens[ln].slice(15));
  }

  const title = meta_tokens.findIndex((x) => x.startsWith("title="));
  if (title != -1) {
    meta_options.title = meta_tokens[title].slice(6);
  }

  const nocopy = meta_tokens.findIndex((x) => x.startsWith("nocopy"));
  if (nocopy != -1) {
    meta_options.allowcopy = false;
  }

  /**
   * Returns array of line numbers to be highlighted
   * @param {string} rangeString - range string to be parsed (e.g. {1,3-5,8})
   * @returns {number[]}
   */
  const hl = meta_tokens.findIndex((x) => x.startsWith("hl="));
  if (hl != -1) {
    const ranges = meta_tokens[hl].slice(4, -1).split(",");
    ranges.forEach((element) => {
      if (element.indexOf("-") === -1) {
        meta_options.highlightLines.push(parseInt(element, 10));
      } else {
        const limits = element.split("-");
        const start = parseInt(limits[0], 10);
        const end = parseInt(limits[1], 10);
        for (let i = start; i <= end; i += 1) {
          meta_options.highlightLines.push(i);
        }
      }
    });
  }

  return meta_options;
}

export default highlighter;
