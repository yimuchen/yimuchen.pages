# Common components for display elements

Each file should contain some blob of HTML elements (excluding the additional
`<style>` tag). Svelte display element files should then use a comment with
something like:

```svelte
<script>
   import <basename> from "$lib/components/<basename>.svelte"
</script>

Any additional items that you might want

<basename />

Any additional items that you might want
```
