import { writable } from "svelte/store";

const isLightTheme = writable(false);
export { isLightTheme };
