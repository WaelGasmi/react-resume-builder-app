import { z } from "zod"

export const PersonalInformationSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
})

export type PersonalInformation = z.infer<typeof PersonalInformationSchema>
