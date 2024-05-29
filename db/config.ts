import { defineDb, column, defineTable, NOW } from 'astro:db';

const PersonalMessage = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    fullName: column.text(),
    email: column.text(),
    message: column.text(),
    readAt: column.date({ optional: true }),
    createdAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { PersonalMessage },
})