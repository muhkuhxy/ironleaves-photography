declare module "bcrypt" {
  function hashSync(plaintext: string, rounds: number): string

  function compareSync(plaintext: string, hash: string): boolean
}

declare module "uuid" {
  function v4(): string
}
