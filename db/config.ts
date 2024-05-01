import { defineTable, defineDb, column } from "astro:db"

const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    token: column.text(),
    expires: column.date(),
    galleries: column.json(),
  },
})

export type SessionType = {
  id: string
  token: string
  expires: Date
  galleries: string[]
}

const Galleries = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    password: column.text(),
  },
})

export default defineDb({
  tables: {
    Sessions,
    Galleries,
  },
})
