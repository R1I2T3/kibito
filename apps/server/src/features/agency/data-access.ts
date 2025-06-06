import { db } from "@/db";
import { agency, agencyMember } from "@/db/schema/agency";
import { eq } from "drizzle-orm";

export const createAgency = async (
  name: string,
  description: string,
  ownerId: string
) => {
  const newAgency = await db.transaction(async (trx) => {
    const newAgency = await trx
      .insert(agency)
      .values({
        name,
        description,
        owner_id: ownerId,
      })
      .returning();
    await trx.insert(agencyMember).values({
      role: "admin",
      user_id: ownerId,
      agency_id: newAgency[0].id,
      isActive: true,
    });
    return newAgency;
  });

  return newAgency[0];
};

export const getUserAgencyDetails = async (userId: string) => {
  const agencyDetails = (
    await db
      .select()
      .from(agencyMember)
      .where(eq(agencyMember.user_id, userId))
      .innerJoin(agency, eq(agency.id, agencyMember.agency_id))
  )[0];
  if (!agencyDetails) {
    return null;
  }
  return {
    name: agencyDetails.agency.name,
    description: agencyDetails.agency.description,
    createdAt: agencyDetails.agency.createdAt.toISOString(), // Convert to ISO string
    ownerId: agencyDetails.agency.owner_id || "", // Ensure ownerId is a string
    role: agencyDetails.agency_member.role,
    isActive: agencyDetails.agency_member.isActive,
  };
};
