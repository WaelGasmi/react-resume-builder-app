import EducationForm from "./forms/EducationForm"
import LanguageForm from "./forms/LanguageForm"
import PersonalInformationForm from "./forms/PersonalInformationForm"
import SkillForm from "./forms/SkillForm"
import WorkExperienceForm from "./forms/WorkExperienceForm"

export default function TabsContent() {
  return (
    <>
      <LanguageForm />
      <PersonalInformationForm />
      <SkillForm />
      <WorkExperienceForm />
      <EducationForm />
    </>
  )
}
