import { createFileRoute } from "@tanstack/react-router";
import SignUpForm from "@/features/auth/components/signup-form";
export const Route = createFileRoute("/_auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUpForm />;
}
