import { db } from "@/db";
import { agency } from "@/db/schema/agency";
import { eq } from "drizzle-orm";

export const isUserAdmin = async (userId: string) => {
  const myAgency = (
    await db.select().from(agency).where(eq(agency.owner_id, userId))
  )[0];
  if (!myAgency) {
    return null;
  }
  return myAgency;
};

export const createAgency = async (
  name: string,
  description: string,
  ownerId: string
) => {
  const newAgency = await db
    .insert(agency)
    .values({
      name,
      description,
      owner_id: ownerId,
    })
    .returning();

  return newAgency[0];
};
