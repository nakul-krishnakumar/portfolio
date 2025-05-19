import AboutSection from "@/src/pages/AboutPage"
import SkillsSection from "@/src/pages/SkillsPage"

const RootPage = () => {
    return (
        <main className="w-full flex flex-col gap-20 sm:gap-[10rem] items-center flex-1">
            <AboutSection />
            <SkillsSection />
        </main>
    );
};

export default RootPage;
