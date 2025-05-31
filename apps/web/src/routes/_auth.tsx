import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <Outlet />
    </div>
  );
}
