import { defineConfig } from "astro/config";
import uno from "@unocss/astro";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://maisy.moe",
    integrations: [uno(), mdx()]
});
