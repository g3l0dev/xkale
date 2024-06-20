import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), image(), tailwind(), mdx(), react()],
  site: "https://www.xkale.com"
});