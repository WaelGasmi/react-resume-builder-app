import type { Resume } from "@/types"
import PersonalInformationSection from "./resumePreviewSections/PersonalInformationSection"
import EducationsPreview from "./resumePreviewSections/EducationsPreview"
import ExperiencesPreview from "./resumePreviewSections/ExperiencesPreview"
import SkillsPreview from "./resumePreviewSections/SkillsPreview"
import LanguagePreview from "./resumePreviewSections/LanguagesPreview"
import { Separator } from "./ui/separator"
import { useReactToPrint } from "react-to-print"
import { useRef } from "react"
import { Button } from "./ui/button"
import { Printer } from "lucide-react"

type ResumePreviewProps = {
  resume?: Resume
}

const flexClass = "flex flex-col gap-4"

export default function ResumePreview({ resume }: ResumePreviewProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  const onReactToPrint = useReactToPrint({
    contentRef,
    documentTitle: "Resume",
  })

  return (
    <div>
      <div
        className="w-[595px] h-[842px] bg-white text-left p-5"
        id="resumePreviewContent"
        ref={contentRef}
      >
        <PersonalInformationSection data={resume?.personalInformation} />
        <div className="grid grid-cols-[70%_30%] gap-4 p-8">
          <div className={flexClass}>
            <EducationsPreview educations={resume?.education} />
            <Separator />
            <ExperiencesPreview experiences={resume?.experience} />
          </div>
          <div className={flexClass}>
            <LanguagePreview languages={resume?.language} />
            <Separator />
            <SkillsPreview skills={resume?.skill} />
          </div>
        </div>
      </div>
      <Button onClick={onReactToPrint}>
        Print <Printer />
      </Button>
    </div>
  )
}
