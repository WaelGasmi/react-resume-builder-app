import { z } from "zod"

export const LanguageSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  name: z.string().optional(),
  proficiency: z.string().optional(),
})

export type Language = z.infer<typeof LanguageSchema>
