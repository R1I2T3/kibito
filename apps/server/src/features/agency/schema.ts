import { z } from "zod";

export const agencyCreationInputSchema = z.object({
  name: z.string().min(1, "Agency name is required"),
  description: z.string().optional(),
});

export const agencyCreationOutputSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional(),
  message: z.string(),
});

export const agencyUpdateInputSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Agency name is required").optional(),
  description: z.string().optional(),
});

export const getAgencyOutputSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.string(), // ISO date string
  ownerId: z.string(),
  role: z.enum(["admin", "editor", "viewer"]),
  isActive: z.boolean(),
});
