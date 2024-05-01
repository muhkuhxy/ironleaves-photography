import { db, Sessions, eq } from "astro:db"
import type { SessionType } from "./config"

export async function getSession(id: string): Promise<SessionType | undefined> {
  const result = await db.select().from(Sessions).where(eq(Sessions.id, id))
  return result[0] as SessionType | undefined
}

export async function updateSession(
  values: Partial<Omit<SessionType, "id">>,
  sessionId: string,
) {
  await db.update(Sessions).set(values).where(eq(Sessions.id, sessionId))
}

export async function createSession(values: SessionType) {
  await db.insert(Sessions).values(values)
}
