import AboutPage from "./aboutPage";
import SkillsPage from "./skillsPage";

const RootPage = () => {
  return (
    <main className="w-full flex flex-col gap-20 sm:gap-[10rem] items-center flex-1">
        <AboutPage />
        <SkillsPage />
    </main>
  )
}

export default RootPage;