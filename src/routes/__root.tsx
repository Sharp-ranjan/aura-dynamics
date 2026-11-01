import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header, Footer } from "@/components/site/Layout";
import { Toaster } from "@/components/ui/sonner";
import { getCorporateSchemaJsonLd, SITE_URL } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-24">
      <div className="max-w-md text-center">
        <span className="font-display text-8xl font-bold tracking-tight text-primary/40">404</span>
        <h1 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
          Corporate Page Not Found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The requested corporate resource, venture documentation, or URL does not exist or has been
          restructured under stealth incubation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2"
          >
            Return to Corporate Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2"
          >
            Contact Secretariat
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight text-foreground">
          System Operational Interruption
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          An unexpected runtime condition occurred. Our distributed system monitoring has logged
          this event for immediate resolution.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2"
          >
            Reinitialize View
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aura Dynamics Enterprises — Premier Multi-Service Holding Enterprise" },
      {
        name: "description",
        content:
          "Aura Dynamics Enterprises Private Limited is a multi-service digital aggregator holding enterprise and technology incubator headquartered in Patna, Bihar, driving PAN-India digital infrastructure and inclusive socio-economic growth.",
      },
      { property: "og:site_name", content: "Aura Dynamics Enterprises Private Limited" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: "Patna" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getCorporateSchemaJsonLd()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
