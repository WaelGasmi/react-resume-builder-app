import { LanguageSchema, type Language } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { TabsContent } from "./ui/tabs"
import { useEffect } from "react"
import { useResumeStore } from "@/store/ResumeStore"

const defaultValues: Language = {
  name: "",
  proficiency: "",
}

export default function LanguageForm() {
  const form = useForm<Language>({
    resolver: zodResolver(LanguageSchema),
    defaultValues: defaultValues,
  })

  const { setLanguage } = useResumeStore()

  useEffect(() => {
    const subscription = form.watch((formValues) => {
      const valid = LanguageSchema.safeParse(formValues)
      if (valid.success) {
        setLanguage(valid.data)
      }
    })

    return () => subscription.unsubscribe()
  }, [form, setLanguage])

  return (
    <TabsContent value={"3"}>
      <Form {...form}>
        <form>
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
                  <Input type="range" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </TabsContent>
  )
}
