import { o, requireAuth } from "@/lib/orpc";
import {
  agencyCreationInputSchema,
  agencyCreationOutputSchema,
  getAgencyOutputSchema,
} from "./schema";
import { createAgency, getUserAgencyDetails } from "./data-access";

/**
 * Handlers for agency-related operations.
 * Implements the agency creation and update contracts.
 */

const createAgencyHandler = o
  .use(requireAuth)
  .input(agencyCreationInputSchema)
  .output(agencyCreationOutputSchema)
  .handler(async ({ input, context }) => {
    const isAlreadyAdmin = await getUserAgencyDetails(context.session.user.id);
    if (isAlreadyAdmin) {
      throw new Error("You are already an admin of an agency.");
    }
    const newAgency = await createAgency(
      input.name,
      input.description || "",
      context.session.user.id
    );
    return {
      ...newAgency,
      message: "Agency created successfully.",
    };
  });
const getUserAgencyDetailsHandler = o
  .use(requireAuth)
  .output(getAgencyOutputSchema)
  .handler(async ({ context }) => {
    const agencyDetails = await getUserAgencyDetails(context.session.user.id);
    if (!agencyDetails) {
      throw new Error("Agency not found.");
    }

    return agencyDetails;
  });
export const agencyHandlers = {
  create: createAgencyHandler,
};
