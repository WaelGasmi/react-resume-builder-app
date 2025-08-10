import type { Resume } from "@/types"
import PersonalInformationSection from "./resumePreviewSections/PersonalInformationSection"

type ResumePreviewProps = {
  resume?: Resume
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <div className="w-[595px] h-[842px] bg-accent">
      <div className="p-5 text-left">
        <PersonalInformationSection data={resume?.personalInformation} />
      </div>
    </div>
  )
}
