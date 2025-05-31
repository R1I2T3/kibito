import Loader from "@/components/loader";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { link, orpc, ORPCContext } from "@/utils/orpc";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import type { RouterClient } from "@orpc/server";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import type { appRouter } from "../../../server/src/routers";
import { createORPCClient } from "@orpc/client";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";
import Header from "@/components/Header";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "Kibito",
      },
      {
        name: "description",
        content: "My App is a web application",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  const isFetching = useRouterState({
    select: (s) => s.isLoading,
  });

  const [client] = useState<RouterClient<typeof appRouter>>(() =>
    createORPCClient(link)
  );
  const [orpcUtils] = useState(() => createORPCReactQueryUtils(client));
  return (
    <>
      <HeadContent />
      <ORPCContext.Provider value={orpcUtils}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="grid grid-rows-[auto_1fr] h-svh px-4">
            <Header />
            {isFetching ? <Loader /> : <Outlet />}
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </ORPCContext.Provider>
      {import.meta.env.VITE_ENV === "dev" && (
        <TanStackRouterDevtools position="bottom-left" />
      )}
      {import.meta.env.VITE_ENV === "dev" && (
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
      )}
    </>
  );
}
