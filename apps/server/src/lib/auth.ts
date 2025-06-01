import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema/auth";
import { SendVerificationCode } from "./mails/sendVerificationToken";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || ""],
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await SendVerificationCode({
        email: user.email,
        url: url,
        username: user.name,
        purpose: "password reset",
      });
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await SendVerificationCode({
        email: user.email,
        url: url,
        username: user.name,
        purpose: "email verification",
      });
    },
  },
});
