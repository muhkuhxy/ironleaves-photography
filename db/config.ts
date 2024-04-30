import { defineTable, defineDb, column } from "astro:db"

const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    token: column.text(),
    expires: column.date(),
    galleries: column.json(),
  },
})

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
