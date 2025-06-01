import { createFileRoute, useSearch } from "@tanstack/react-router";
import ResetPasswordForm from "@/features/auth/components/reset-password-form";
import { z } from "zod";
export const Route = createFileRoute("/_auth/reset-password")({
  component: RouteComponent,
  validateSearch: z.object({
    token: z.string(),
  }),
});

function RouteComponent() {
  const { token } = useSearch({
    from: "/_auth/reset-password",
  });
  return <ResetPasswordForm token={token} />;
}
