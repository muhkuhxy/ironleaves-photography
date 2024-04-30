import { db, Sessions, eq } from "astro:db"

export async function getSession(
  id: string,
): Promise<
  { id: string; token: string; expires: Date; galleries: string[] } | undefined
> {
  const result = await db.select().from(Sessions).where(eq(Sessions.id, id))
  return result[0] as
    | { id: string; token: string; expires: Date; galleries: string[] }
    | undefined
}
