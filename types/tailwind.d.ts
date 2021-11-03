declare module "tailwindcss/resolveConfig" {
  interface Config {
    theme: {
      screens: {
        sm: string,
        md: string,
        lg: string,
        xl: string,
        '2xl': string,
      }
    }
  }
  export default function resolveConfig(config: unknown): Config
}
