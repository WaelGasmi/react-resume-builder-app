import type {
  PersonalInformation,
  Skill,
  Education,
  Experience,
  Language,
} from "."

export type Resume = {
  id: string
  title: string
  userId: string
  personalInformation: PersonalInformation
  skill: Skill[]
  education: Education[]
  experience: Experience[]
  language: Language[]
}
