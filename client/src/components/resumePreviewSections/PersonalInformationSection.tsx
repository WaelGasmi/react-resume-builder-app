import React from "react"
import { Separator } from "../ui/separator"
import type { PersonalInformation } from "@/types"

type PersonalInformationSectionProps = {
  data: PersonalInformation | undefined
}

export default function PersonalInformationSection({
  data,
}: PersonalInformationSectionProps) {
  return (
    <p>
      {data ? (
        <React.Fragment>
          <p className="text-3xl font-bold">
            {data.firstName}
            {data.lastName}
          </p>
          <p className="text-red-500 font-bold text-2xl">{data.jobTitle}</p>
          <p className="text-sm flex justify-between">
            {data.email && <p>{data.email}</p>}
            {data.phone && <p>{data.phone}</p>}
          </p>

          <div>
            {data.github && (
              <p className="text-xs">
                <a href={data.github} target="_blank">
                  Github
                </a>
              </p>
            )}
            {data.linkedin && (
              <p className="text-sm">
                <a href={data.linkedin} target="_blank">
                  Linkedin
                </a>
              </p>
            )}
            {data.portfolio && (
              <p className="text-sm">
                <a href={data.portfolio} target="_blank">
                  Portfolio
                </a>
              </p>
            )}
          </div>
          <Separator />
        </React.Fragment>
      ) : null}
    </p>
  )
}
