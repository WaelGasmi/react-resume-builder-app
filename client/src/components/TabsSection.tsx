import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsContent from "./TabsContent"

export default function TabsSection() {
  return (
    <Tabs defaultValue="1" className="w-fit">
      <TabsList>
        <TabsTrigger value="1">Personal Information</TabsTrigger>
        <TabsTrigger value="2">Work Experiences</TabsTrigger>
        <TabsTrigger value="3">Languages</TabsTrigger>
        <TabsTrigger value="4">Skills</TabsTrigger>
        <TabsTrigger value="5">Education</TabsTrigger>
        <TabsTrigger value="6">Certifications</TabsTrigger>
      </TabsList>
      <TabsContent />
    </Tabs>
  )
}
