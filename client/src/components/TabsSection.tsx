import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsContent from "./TabsContent"
import { useTabStore } from "@/store/TabStore"

export default function TabsSection() {
  const value = useTabStore((state) => state.value)

  return (
    <Tabs value={value.toString()} className="w-fit space-y-5">
      <TabsList>
        <TabsTrigger value="1">Personal Information</TabsTrigger>
        <TabsTrigger value="2">Work Experiences</TabsTrigger>
        <TabsTrigger value="3">Languages</TabsTrigger>
        <TabsTrigger value="4">Skills</TabsTrigger>
        <TabsTrigger value="5">Education</TabsTrigger>
      </TabsList>
      <TabsContent />
    </Tabs>
  )
}
