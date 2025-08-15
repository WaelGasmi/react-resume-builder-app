import "./App.css"
import ResumePreview from "./components/ResumePreview"
import TabsSection from "./components/TabsSection"
import { useResumeStore } from "./store/ResumeStore"

export default function App() {
  const resume = useResumeStore((state) => state.resume)

  return (
    <div className="grid grid-cols-2 gap-4 ">
      <TabsSection resume={resume} />
      <ResumePreview resume={resume} />
    </div>
  )
}
