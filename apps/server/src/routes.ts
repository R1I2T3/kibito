import { publicProcedure } from "./lib/orpc";
import { agencyHandlers } from "./features/agency/handlers";
export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  agency: agencyHandlers,
};
export type AppRouter = typeof appRouter;
