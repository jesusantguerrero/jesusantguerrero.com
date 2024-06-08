import { db, PersonalMessage } from 'astro:db';

export default async function() {
  await db.insert(PersonalMessage).values([
    { fullName: "John Doe", email: 'john@example.com', message: 'Hope you like Astro DB!' },
    { fullName: "John Doe", email: 'john@example.com', message: 'cause I like Astro DB!' },
  ])
}