import { defineConfig } from "astro/config"
import path from "path"
import { fileURLToPath } from "url"
import { loadEnv } from "vite"
import {storyblok} from "@storyblok/astro"
import basicSsl from "@vitejs/plugin-basic-ssl"
import netlify from "@astrojs/netlify/functions"
import alpinejs from "@astrojs/alpinejs"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const env = loadEnv("", process.cwd(), "")

const deployment = {
  output: env.SB_PREVIEW ? "server" : "static",
  adapter: env.SB_PREVIEW
    ? netlify({
        edgeMiddleware: true,
      })
    : undefined,
}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
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
    plugins: [basicSsl(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      https: true,
    },
  },
  ...deployment,
})
