import React from "react"
import { useResumeStore } from "@/store/ResumeStore"
import { Separator } from "./ui/separator"

export default function ResumePreview() {
  const { personalInformation: data } = useResumeStore()

  return (
    <div className="w-[720px] h-[600px] bg-accent">
      <div className="p-5 text-left">
        {data ? (
          <React.Fragment>
            <p>
              {data.firstName} {data.lastName}
            </p>
            <p className="text-red-500 font-bold">{data.jobTitle}</p>
            {(data.email || data.phone) && (
              <p className="text-sm">
                {data.email && data.phone
                  ? [data.email, data.phone].join("-")
                  : data.email || data.phone}
              </p>
            )}
            <div>
              {data.github && (
                <p className="text-sm">
                  <a href={data.github}>Github</a>
                </p>
              )}
              {data.linkedin && (
                <p className="text-sm">
                  <a href={data.linkedin}>Linkedin</a>
                </p>
              )}
              {data.portfolio && (
                <p className="text-sm">
                  <a href={data.portfolio}>Portfolio</a>
                </p>
              )}
            </div>
            <Separator />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  )
}
