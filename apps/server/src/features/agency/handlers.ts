import { o, requireAuth } from "@/lib/orpc";
import {
  agencyCreationInputSchema,
  agencyCreationOutputSchema,
} from "./schema";
import { createAgency, isUserAdmin } from "./data-access";

/**
 * Handlers for agency-related operations.
 * Implements the agency creation and update contracts.
 */

const createAgencyHandler = o
  .use(requireAuth)
  .input(agencyCreationInputSchema)
  .output(agencyCreationOutputSchema)
  .handler(async ({ input, context }) => {
    const isAlreadyAdmin = await isUserAdmin(context.session.user.id);
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
export const agencyHandlers = {
  create: createAgencyHandler,
};
