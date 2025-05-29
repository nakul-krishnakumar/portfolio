import AboutSection from "@/src/pages/AboutPage";
import SkillsSection from "@/src/pages/SkillsPage";
import ContactMeSection from "../pages/ContactMePage";

const RootPage = () => {
    return (
        <main className="w-full flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[10rem] items-center flex-1">
            <AboutSection />
            <SkillsSection />
            <ContactMeSection />
        </main>
    );
};

export default RootPage;
