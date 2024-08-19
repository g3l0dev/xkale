import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.xkale.com",
  integrations: [icon(), image(), tailwind(), mdx(), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()]
});