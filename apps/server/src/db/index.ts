import { drizzle } from "drizzle-orm/node-postgres";
import * as agencySchema from "./schema/agency";
import * as authSchema from "./schema/auth";

const schema = {
  ...agencySchema,
  ...authSchema,
};
export const db = drizzle(process.env.DATABASE_URL || "", {
  schema,
});
