import { AnimatedNumberInView } from "@/src/components/AnimatedNumberInView";
import { Button } from "@/src/components/ui/button";
import AnimatedText from "@/src/components/ui/typed";
import { MapPinHouse, MoveUpRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="flex flex-col gap-10 sm:gap-16 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] px-2 sm:px-4">
            <section>
                <AnimatedText>
                    <h1 className="about-title">
                        SOFTWARE <br />
                        <span className="gradient-text">ENGINEER</span>
                    </h1>
                    <h1 className="about-title">
                        AI & ML <br className="sm:block" />
                        <span className="gradient-text">ENGINEER</span>
                    </h1>
                </AnimatedText>
                <div className="about-paragraph mt-4 sm:mt-6">
                    <p className="max-w-[630px] mx-auto md:mx-0 text-[15px] sm:text-[16px]">
                        Driven by a passion for{" "}
                        <mark className="highlight">machine learning</mark> and
                        innovation, I constantly explore new technologies to
                        transform ideas into seamless, engaging experiences that
                        leave a lasting impression. Currently a sophomore at{" "}
                        <mark className="highlight">
                            Indian Institute of Information Technology,
                            Kottayam.
                        </mark>
                    </p>
                </div>
            </section>
            <section className="about-numbers">
                <div className="about-numbers_items">
                    <span className="about-numbers_num">
                        <AnimatedNumberInView num={1} />
                    </span>
                    <span className="about-numbers_details">
                        YEARS OF <br />
                        EXPERIENCE
                    </span>
                </div>

                <div className="about-numbers_items">
                    <span className="about-numbers_num">
                        <AnimatedNumberInView num={15} />
                    </span>
                    <span className="about-numbers_details">
                        PROJECTS <br />
                        COMPLETED
                    </span>
                </div>

                <div className="about-numbers_items">
                    <span className="about-numbers_num">
                        <AnimatedNumberInView num={18} />
                    </span>
                    <span className="about-numbers_details">
                        TECHS <br />
                        MASTERED
                    </span>
                </div>

                <div className="about-numbers_items">
                    <span className="about-numbers_num !-tracking-[2px]">
                        <AnimatedNumberInView num={230} />
                    </span>
                    <span className="about-numbers_details">
                        SUCCESSFUL <br />
                        COMMITS
                    </span>
                </div>
            </section>
            <section className="about-buttons">
                <Button
                    variant="outline"
                    className="!w-max backdrop-blur-md rounded-2xl !py-4 sm:!py-5 hover:bg-white-100 hover:text-primary hover:border-none"
                >
                    <MapPinHouse className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-1 sm:ml-2 text-[14px] sm:text-[16px]">
                        Kerala, India
                    </span>
                </Button>
                <Button className="!w-max bg-white-100 text-primary hover:bg-primary hover:text-white !py-4 sm:!py-5 rounded-2xl">
                    <span className="mr-1 sm:mr-2 text-[14px] sm:text-[16px]">
                        Contact Me
                    </span>
                    <MoveUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </section>
        </section>
    );
};

export default AboutSection;
