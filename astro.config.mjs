import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    alpinejs(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: "storyblok/BlogPost",
      },
      apiOptions: {},
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
