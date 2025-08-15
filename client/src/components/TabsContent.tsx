import type { Resume } from "@/types"
import EducationForm from "./forms/EducationForm"
import LanguageForm from "./forms/LanguageForm"
import PersonalInformationForm from "./forms/PersonalInformationForm"
import SkillForm from "./forms/SkillForm"
import WorkExperienceForm from "./forms/WorkExperienceForm"
import Preferences from "./Preferences"

type ResumePreviewProps = {
  resume?: Resume
}

export default function TabsContent({ resume }: ResumePreviewProps) {
  return (
    <>
      <LanguageForm formData={resume?.language} />
      <PersonalInformationForm data={resume?.personalInformation} />
      <SkillForm />
      <WorkExperienceForm />
      <EducationForm />
      <Preferences />
    </>
  )
}
