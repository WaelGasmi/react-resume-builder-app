import { z } from "zod"

export const SkillSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  proficiency: z.string().optional(),
})

export type Skill = z.infer<typeof SkillSchema>
