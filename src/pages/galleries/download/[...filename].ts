import type { APIRoute } from "astro"
import { getSession, updateSession } from "../../../../db/services"
import dayjs from "dayjs"
import { downloadContent, getThumbnails, getToken } from "../../../lib/graph-client"

export const prerender = false

export const GET: APIRoute = async ({ params, request, cookies, redirect }) {
  const { filename } = params

const sessionId = cookies.get("ironleaves_session")?.value

if (!sessionId) {
  return redirect(`/galleries/login?gallery=${slug}`)
}

let session = await getSession(sessionId)

if (!session) {
  console.error("no session found")
  cookies.delete("ironleaves_session")
  return redirect(`/galleries/login?gallery=${slug}`)
}

if (!(session.galleries as string[]).includes(slug!)) {
  return redirect(`/galleries/login?gallery=${slug}`)
}

const now = dayjs()
const expired = now.isAfter(session.expires)

if (expired) {
  const [token, expires] = await getToken()
  await updateSession(
    {
      token,
      expires,
    },
    sessionId,
  )
  session = { ...session, token, expires }
}

const thumbs = await downloadContent(`ironleaves-gallerie/${filename}`, session.token)
  return new Response()
}