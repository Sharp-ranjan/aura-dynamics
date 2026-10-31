import { describe, expect, it } from "vitest";
import { normalizeLegalSlug } from "./legal-aliases";

describe("Legal aliases", () => {
  it("resolves privacy to privacy-policy", () => {
    expect(normalizeLegalSlug("privacy")).toBe("privacy-policy");
  });
  it("resolves terms to terms-of-service", () => {
    expect(normalizeLegalSlug("terms")).toBe("terms-of-service");
  });
  it("preserves canonical and unknown slugs", () => {
    expect(normalizeLegalSlug("privacy-policy")).toBe("privacy-policy");
    expect(normalizeLegalSlug("unknown")).toBe("unknown");
  });
});