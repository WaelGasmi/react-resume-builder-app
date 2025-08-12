import { PersonalInformationSchema, type PersonalInformation } from "@/types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { TabsContent } from "../ui/tabs"
import { useResumeStore } from "@/store/ResumeStore"
import { personalInformationDefaultValues } from "@/defaults/personalInformationDefaultValues"
import { Separator } from "../ui/separator"
import { useEffect } from "react"
import NextPreviousButtons from "../NextPreviousButtons"

export default function PersonalInformationForm() {
  const setResume = useResumeStore((state) => state.setResume)
  const resume = useResumeStore((state) => state.resume)
  console.log(resume)

  const form = useForm<PersonalInformation>({
    resolver: zodResolver(PersonalInformationSchema),
    defaultValues: personalInformationDefaultValues,
    mode: "onChange",
  })

  useEffect(() => {
    const subscription = form.watch(async () => {
      const isValid = await form.trigger()
      if (!isValid) return
      const data = form.getValues()
      setResume({ personalInformation: data })
    })

    return subscription.unsubscribe()
  }, [setResume, form])

  useEffect(() => {
    form.setFocus("firstName")
  }, [form])

  return (
    <TabsContent value={"1"} className="space-y-5">
      <Form {...form}>
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <h4 className="text-sm font-medium text-left mb-4">Links</h4>
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github</FormLabel>
                <FormControl>
                  <Input type="url" {...field} placeholder="https://" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Linkedin</FormLabel>
                <FormControl>
                  <Input type="url" {...field} placeholder="https://" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Portfolio</FormLabel>
                <FormControl>
                  <Input type="url" {...field} placeholder="https://" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <NextPreviousButtons disabled={!form.formState.isValid} />
    </TabsContent>
  )
}
