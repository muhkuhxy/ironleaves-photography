import { db, Galleries } from "astro:db"
import bcrypt from "bcrypt"

export default async function () {
  await db
    .insert(Galleries)
    .values([{ id: "lisa-max", password: bcrypt.hashSync("test", 10) }])
}
