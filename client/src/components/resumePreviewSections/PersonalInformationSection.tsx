import { Separator } from "../ui/separator"
import type { PersonalInformation } from "@/types"

type PersonalInformationSectionProps = {
  data: PersonalInformation | undefined
}

export default function PersonalInformationSection({
  data,
}: PersonalInformationSectionProps) {
  if (!data) return null

  return (
    <>
      <p className="text-3xl font-bold">
        {data.firstName} {data.lastName}
      </p>
      <p className="text-red-500 font-bold text-2xl">{data.jobTitle}</p>
      <div className="text-sm flex justify-between">
        {data.email && <p>{data.email}</p>}
        {data.phone && <p>{data.phone}</p>}
      </div>

      <div>
        {data.github && (
          <p className="text-xs">
            Github{" "}
            <a href={data.github} target="_blank">
              {data.github}
            </a>
          </p>
        )}
        {data.linkedin && (
          <p className="text-sm">
            Linkedin{" "}
            <a href={data.linkedin} target="_blank">
              {data.linkedin}
            </a>
          </p>
        )}
        {data.portfolio && (
          <p className="text-sm">
            Portfolio{" "}
            <a href={data.portfolio} target="_blank">
              {data.portfolio}
            </a>
          </p>
        )}
      </div>
      <Separator />
    </>
  )
}
