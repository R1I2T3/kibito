import {
  pgTable,
  uuid,
  text,
  timestamp,
  pgEnum,
  boolean,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const agency = pgTable("agency", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  owner_id: text("owner_id").references(() => user.id, { onDelete: "cascade" }),
});

export const roleTypes = pgEnum("roles_types", ["admin", "editor", "viewer"]);
export const agencyMember = pgTable("agency_member", {
  id: uuid("id").primaryKey().defaultRandom(),
  agency_id: uuid("agency_id").references(() => agency.id, {
    onDelete: "cascade",
  }),
  user_id: text("user_id").references(() => user.id, { onDelete: "cascade" }),
  role: roleTypes("role").notNull().default("viewer"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
export const enumStatus = pgEnum("status", [
  "accepted",
  "expired",
  "pending",
  "rejected",
]);
export const invitations = pgTable("invitations", {
  id: uuid("id").primaryKey().defaultRandom(),
  agency_id: uuid("agency_id").references(() => agency.id, {
    onDelete: "cascade",
  }),
  invited_by: text("invited_by").references(() => user.id),
  email: text("email").notNull(),
  invitation_token: uuid("invitation_token").notNull().unique().defaultRandom(),
  status: enumStatus("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  expiredAt: timestamp("expired_at")
    .notNull()
    .$defaultFn(() => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
});
