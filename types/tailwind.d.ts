declare module "tailwindcss/resolveConfig" {
  interface Config {
    theme: {
      screens: {
        md: string
      }
    }
  }
  export default function resolveConfig(config: unknown): Config
}
