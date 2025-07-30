import Steps from "@/components/Steps"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useResumeStore } from "@/store/ResumeStore"

export default function FormBuilder() {
  const currentTab = useResumeStore((state) => state.currentTab)

  return (
    <Tabs value={currentTab.toString()} className="w-[500px]">
      <TabsList>
        <TabsTrigger value="1">Personal Information</TabsTrigger>
        <TabsTrigger value="2">Work Experiences</TabsTrigger>
        <TabsTrigger value="3">Languages</TabsTrigger>
        <TabsTrigger value="4">Skills</TabsTrigger>
        <TabsTrigger value="5">Education</TabsTrigger>
        <TabsTrigger value="6">Certifications</TabsTrigger>
      </TabsList>
      <Steps />
    </Tabs>
  )
}
