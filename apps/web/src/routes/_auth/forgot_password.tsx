import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordForm from "@/features/auth/components/forgot-password-form";
export const Route = createFileRoute("/_auth/forgot_password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ForgotPasswordForm />;
}
