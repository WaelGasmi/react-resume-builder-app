import { z } from "zod"

export const PersonalInformationSchema = z.object({
  id: z.string().optional(),
  resumeId: z.string().optional(),
  firstName: z.string().nonempty("First Name"),
  lastName: z.string().nonempty("Last Name"),
  email: z.string().nonempty("Email is required"),
  jobTitle: z.string().nonempty("Job Title is required"),
  phone: z.string().nonempty("Phone is Required"),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
})

export type PersonalInformation = z.infer<typeof PersonalInformationSchema>
