import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  org: z.string().trim().min(2, "Please enter your organization").max(150),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().regex(/^\+91[\s-]?[6-9]\d{4}[\s-]?\d{5}$/, "Use +91 format, e.g. +91 98765 43210"),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000),
});

export type Inquiry = z.infer<typeof inquirySchema>;
