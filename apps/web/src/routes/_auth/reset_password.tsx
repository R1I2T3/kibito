import { createFileRoute } from "@tanstack/react-router";
import ResetPasswordForm from "@/features/auth/components/reset-password-form";
export const Route = createFileRoute("/_auth/reset_password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ResetPasswordForm />;
}
