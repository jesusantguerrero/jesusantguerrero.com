import { defineAction, z } from "astro:actions";


export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      receivePromo: z.boolean(),
    }),
    handler: async ({ email, receivePromo }) => {
      console.log(email, receivePromo )
      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
};