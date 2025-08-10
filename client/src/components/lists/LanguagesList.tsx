import type { Language } from "@/types"

type LanguagesListProps = { languages: Language[] }

export default function LanguagesList({ languages }: LanguagesListProps) {
  return (
    <>
      {languages.map((language) => (
        <div key={language.name}>
          <p>{language.name}</p>
          <p>{language.proficiency}</p>
        </div>
      ))}
    </>
  )
}
