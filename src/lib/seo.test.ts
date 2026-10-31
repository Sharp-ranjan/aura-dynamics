import { describe, expect, it } from "vitest";
import { seo } from "./seo";

describe("Self-referencing page metadata", () => {
  const paths = ["/", "/about-us", "/ventures", "/governance", "/contact-us", "/legal/privacy", "/legal/terms", "/legal/privacy-policy", "/legal/terms-of-service", "/legal/ip-copyright", "/legal/disclaimers"];
  it("keeps each canonical on the requested page", () => {
    for (const path of paths) {
      expect(seo("Page", "Description", path).links).toEqual([{ rel: "canonical", href: path }]);
    }
  });
  it("keeps each Open Graph URL on the requested page", () => {
    for (const path of paths) {
      expect(seo("Page", "Description", path).meta).toContainEqual({ property: "og:url", content: path });
    }
  });
});