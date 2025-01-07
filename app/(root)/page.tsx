import AboutPage from "./aboutPage";
import SkillsPage from "./skillsPage";

const RootPage = () => {
  return (
    <main className="flex flex-col gap-20 sm:gap-[10rem] items-center w-full md:ml-[6rem]">
        <AboutPage />
        <SkillsPage />
    </main>
  )
}

export default RootPage;