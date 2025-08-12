import { ExperienceSchema, type Experience } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { useEffect } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import { useResumeStore } from "@/store/ResumeStore"
import NextPreviousButtons from "../NextPreviousButtons"
import { Textarea } from "../ui/textarea"
import { v4 as uuidv4 } from "uuid"
import ExperienceList from "../lists/ExperienceList"

const today = new Date().toISOString().split("T")[0]

const defaultValues: Experience = {
  location: "",
  startDate: today,
  endDate: today,
  description: "",
  resumeId: "",
  corporate: "",
  id: "",
}

export default function WorkExperienceForm() {
  const { setResume, resume } = useResumeStore()
  const experiences = resume?.experience ?? []

  const form = useForm<Experience>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  })

  const addExperience = (data: Experience) => {
    setResume({
      experience: [...experiences, { ...data, id: uuidv4() }],
    })
    form.reset(defaultValues)
  }

  const onRemoveExperience = (expId: string) => {
    const filteredExperiences = experiences.filter((exp) => exp.id !== expId)
    setResume({ experience: filteredExperiences })
  }

  useEffect(() => {
    form.setFocus("corporate")
  }, [form])

  return (
    <TabsContent value="2" className="space-y-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(addExperience)}
          className="space-y-5 grid"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="corporate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Corporate</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            variant={"secondary"}
            disabled={!form.formState.isValid}
          >
            Add Experience
          </Button>
        </form>
      </Form>

      <ExperienceList
        experiences={experiences}
        onRemoveExperience={onRemoveExperience}
      />
      <NextPreviousButtons disabled={!form.formState.isValid} />
    </TabsContent>
  )
}
