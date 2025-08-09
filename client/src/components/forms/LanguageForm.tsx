import { LanguageSchema, type Language } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import { useEffect, useState } from "react"
import { useResumeStore } from "@/store/ResumeStore"
import { Button } from "../ui/button"

const defaultValues: Language = {
  name: "",
  proficiency: "",
}

export default function LanguageForm() {
  const [langs, setLangs] = useState<Language[]>([])
  const setResume = useResumeStore((state) => state.setResume)
  const resume = useResumeStore((state) => state.resume)

  const form = useForm<Language>({
    resolver: zodResolver(LanguageSchema),
    defaultValues: defaultValues,
  })

  const addLanguage = (data: Language) => {
    setLangs((prev) => [...prev, data])
    form.reset(defaultValues)
  }

  useEffect(() => {
    setResume({ language: langs })
  }, [langs, setResume])

  console.log(resume)

  return (
    <TabsContent value={"3"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addLanguage)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proficiency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proficiency</FormLabel>
                <FormControl>
                  <Input type="range" {...field} min={1} max={10} step={1} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Add Language</Button>
        </form>
      </Form>
      {langs.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.proficiency}</p>
        </div>
      ))}
    </TabsContent>
  )
}
