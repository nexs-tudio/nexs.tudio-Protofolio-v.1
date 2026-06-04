import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  projectType: z.string().trim().min(2, "Project type is required").max(80),
  budgetRange: z.string().trim().min(2, "Budget range is required").max(80),
  timeline: z.string().trim().min(2, "Timeline is required").max(80),
  message: z.string().trim().min(20, "Tell us a little more about the project").max(1600),
  company: z.string().trim().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
