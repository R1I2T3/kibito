import { createFileRoute } from "@tanstack/react-router";
import { orpc } from "@/utils/orpc";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return <div>HomeComponent</div>;
}

export default HomeComponent;
