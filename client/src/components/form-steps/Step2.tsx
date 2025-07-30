import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Step2Schema } from "@/types/Step2Schema"
import TextField from "../form-fields/TextField"
import { useResumeStore } from "@/store/ResumeStore"

export type Step2Input = z.infer<typeof Step2Schema>

export default function Step2() {
  const { register, handleSubmit } = useForm<Step2Input>({
    resolver: zodResolver(Step2Schema),
  })

  const setStep2 = useResumeStore((state) => state.setStep2)
  const step2 = useResumeStore((state) => state.step2)
  const setCurrentTab = useResumeStore((state) => state.setCurrentTab)

  const onSubmit = (data: Step2Input) => {
    setStep2(data)
    setCurrentTab()
  }

  console.log(step2)

  return (
    <TabsContent value="2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          name="company"
          label="Company"
          placeholder="Enter your Company"
        />

        <TextField
          register={register}
          name="position"
          label="Enter your Position"
        />

        <TextField
          register={register}
          name="email"
          label="Email"
          placeholder="Enter your Email"
        />

        <TextField
          register={register}
          name="location"
          label="Location"
          placeholder="Enter your Location"
        />

        <TextField
          register={register}
          name="phone"
          label="Phone"
          placeholder="Enter your Phone"
        />

        <TextField
          register={register}
          name="github"
          label="Github"
          placeholder="Enter your Github"
        />

        <TextField
          register={register}
          name="linkedin"
          label="Linkedin"
          placeholder="Enter your Linkedin"
        />

        <TextField
          register={register}
          name="portfolio"
          label="Portfolio"
          placeholder="Enter your Portfolio"
        />

        <Button type="submit">Next</Button>
      </form>
    </TabsContent>
  )
}
