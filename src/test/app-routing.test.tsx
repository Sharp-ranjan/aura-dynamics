import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing and corporate pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  const routesToTest = [
    { path: "/", id: "/" },
    { path: "/about-us", id: "/about-us" },
    { path: "/ventures", id: "/ventures" },
    { path: "/governance", id: "/governance" },
    { path: "/contact-us", id: "/contact-us" },
    { path: "/privacy-policy", id: "/privacy-policy" },
    { path: "/terms-of-service", id: "/terms-of-service" },
    { path: "/copyright", id: "/copyright" },
  ];

  routesToTest.forEach(({ path, id }) => {
    it(`resolves ${path} to valid route without falling back to root/not-found`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
      expect(matches.at(-1)?.pathname).toBe(id);
    });
  });
});
