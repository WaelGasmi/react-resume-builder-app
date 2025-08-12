import { EducationSchema, type Education } from "@/types"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useResumeStore } from "@/store/ResumeStore"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import NextPreviousButtons from "../NextPreviousButtons"
import EducationList from "../lists/EducationList"
import { v4 as uuidv4 } from "uuid"
import { educationDefaultValues } from "@/defaults"

export default function EducationForm() {
  const { setResume, resume } = useResumeStore()
  const educations = resume?.education ?? []

  const form = useForm<Education>({
    resolver: zodResolver(EducationSchema),
    defaultValues: educationDefaultValues,
    mode: "onChange",
  })

  const addEducation = (data: Education) => {
    setResume({ education: [...educations, { ...data, id: uuidv4() }] })
    form.reset(educationDefaultValues)
  }

  const onRemoveEducation = (educationId: string) => {
    const filteredEducations = educations.filter(
      (education) => education.id !== educationId
    )
    setResume({ education: filteredEducations })
  }

  useEffect(() => {
    form.setFocus("institute")
  }, [form])

  return (
    <TabsContent value="5" className="space-y-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addEducation)} className="space-y-5">
          <FormField
            control={form.control}
            name="institute"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institute</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    min={form.getValues("startDate")}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"secondary"}
            disabled={!form.formState.isValid}
          >
            Add Education
          </Button>
        </form>
      </Form>

      <EducationList
        educations={educations}
        onRemoveEducation={onRemoveEducation}
      />
      <NextPreviousButtons disabled={!form.formState.isValid} />
    </TabsContent>
  )
}
