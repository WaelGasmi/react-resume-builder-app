import type { Language } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

type LanguagePreviewProps = {
  languages: Language[] | undefined
}

const cardClass =
  "bg-white border-none shadow-none outline-none p-0 break-after-avoid"

export default function LanguagePreview({ languages }: LanguagePreviewProps) {
  if (!languages) return null

  return (
    <>
      {languages.map((language) => (
        <Card className={cardClass} key={language.id}>
          <CardHeader>
            <CardTitle className="text-sm">
              <Badge>{language.name}</Badge>
            </CardTitle>
            {language.proficiency && (
              <CardDescription className="text-xm">
                <Badge>{language.proficiency}</Badge>
              </CardDescription>
            )}
          </CardHeader>
        </Card>
      ))}
    </>
  )
}
