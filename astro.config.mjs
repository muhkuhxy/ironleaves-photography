import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import db from "@astrojs/db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = loadEnv("", process.cwd(), "");

const deployment = {
  output: env.SB_PREVIEW ? "server" : "hybrid",
  adapter: env.SB_PREVIEW ? netlify({
    edgeMiddleware: true
  }) : undefined
};

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), alpinejs(), react(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: "storyblok/BlogPost"
    },
    apiOptions: {}
  }), db()],
  vite: {
    plugins: [basicSsl()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    server: {
      https: true
    }
  },
  ...deployment
});