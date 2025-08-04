import { z } from "zod"

export const SkillSchema = z.object({
  name: z.string(),
  proficiency: z.string().optional(),
})

export type Skill = z.infer<typeof SkillSchema> & {
  id: string
  resumeId: string
}
