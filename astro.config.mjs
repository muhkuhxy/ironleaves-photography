import { defineConfig } from "astro/config"
import path from "path"
import { fileURLToPath } from "url"
import { loadEnv } from "vite"
import storyblok from "@storyblok/astro"
import basicSsl from "@vitejs/plugin-basic-ssl"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const env = loadEnv("", process.cwd(), "")

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs"

// https://astro.build/config
import react from "@astrojs/react"

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
    plugins: [basicSsl()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      https: true,
    },
  },
})
