import { defineAction, z } from "astro:actions";
import { sendEmail } from "../utils/sendEmail";

export const server = {
  contactMe: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string(),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ email, message, fullName }: { email: string, message: string, fullName: string}) => {
      console.log({email, fullName, message }, import.meta.env.RESEND_API_KEY)
      sendEmail({
        email,
        message,
        subject: `From ${fullName}<${email}>`
      }, import.meta.env.RESEND_API_KEY)
      return { success: true };
    },
  }),
};