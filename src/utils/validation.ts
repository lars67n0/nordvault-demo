import { z } from 'zod';

// Validation schemas using Zod

export const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(8).max(128),
});

export const createDocumentSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(100000),
});

export const documentIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type CreateDocumentInput = z.infer<typeof createDocumentSchema>;
