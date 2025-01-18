import { GlobeAnimation } from "@/components/GlobeAnimation";

const SkillsPage = () => {
  return (
    <section id="skills" className="w-full px-3 text-center">
        <h1 className="font-bold text-[56px]">SKILLS</h1>
        <section className="grid grid-cols-1 grid-rows-5 sm:grid-cols-6 justify-center w-full h-[48rem] gap-1">
            <div className="skills-grid-item sm:col-span-4"></div>
            <div className="skills-grid-item sm:row-span-3 sm:col-span-2 hidden sm:block object-cover h-min">
                <GlobeAnimation />
            </div>
            <div className="skills-grid-item sm:col-span-4"></div>
            <div className="skills-grid-item sm:row-span-3"></div>
            <div className="skills-grid-item sm:row-span-3"></div>
            <div className="skills-grid-item sm:col-span-2"></div>
            <div className="skills-grid-item sm:col-span-4 sm:row-span-2"></div>
        </section>
    </section>
  )
}

export default SkillsPage;