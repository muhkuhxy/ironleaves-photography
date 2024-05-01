import { db, Galleries } from "astro:db"
import bcrypt from "bcrypt"

export default async function () {
  await db
    .insert(Galleries)
    .values([{ id: "23-08_Bucky", password: bcrypt.hashSync("test", 10) }])
}
