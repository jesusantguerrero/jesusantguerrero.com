import { defineAction, z } from "astro:actions";
import { db, PersonalMessage, isDbError } from "astro:db"

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string(),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ email, message, fullName }) => {
      console.log({email, fullName, message })
      try {
        await db.insert(PersonalMessage).values({
          email,
          fullName,
          message,
        });
      } catch (e) {
        console.log(e)
        if (isDbError(e)) {
          return new Response(`Cannot send the message \n\n${e.message}`, { status: 400 });
        }
        return new Response('An unexpected error occurred', { status: 500 });
      }
      console.log("Message saved")
      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
};