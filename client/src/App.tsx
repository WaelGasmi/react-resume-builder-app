import "./App.css"
import ResumePreview from "./components/ResumePreview"
import TabsSection from "./components/TabsSection"

export default function App() {
  return (
    <div className="flex gap-4">
      <TabsSection />
      <ResumePreview />
    </div>
  )
}
