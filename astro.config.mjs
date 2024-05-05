import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), image(), tailwind(), mdx()],
  site: "https://www.xkale.com",
});