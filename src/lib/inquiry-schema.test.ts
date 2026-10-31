import { describe, expect, it } from "vitest";
import { inquirySchema } from "./inquiry-schema";

const base = { name: "Asha Rao", org: "Acme", email: "a@acme.in", phone: "+91 98765 43210", subject: "Partnership", message: "We would like to explore a partnership." };

describe("inquirySchema", () => {
  it("accepts +91 phone numbers", () => expect(inquirySchema.safeParse(base).success).toBe(true));
  it("rejects phone without +91", () => expect(inquirySchema.safeParse({ ...base, phone: "9876543210" }).success).toBe(false));
});
