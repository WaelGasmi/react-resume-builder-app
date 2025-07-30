import { z } from "zod"

export const Step1Schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.email().toLowerCase(),
  location: z.string().nonempty("Location is required"),
  phone: z.string().nonempty("Phone is Required"),
  github: z.url(),
  linkedin: z.url(),
  portfolio: z.url(),
})
