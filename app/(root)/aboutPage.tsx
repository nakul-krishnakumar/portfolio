import { AnimatedNumberInView } from "@/components/AnimatedNumberInView";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/typed";
import { MapPinHouse, MoveUpRight } from "lucide-react";

const AboutPage = () => {

    return (
        <section className="md:ml-[5rem] flex flex-col gap-16 sm:w-[90%] md:w-[80%] px-2">
            <section>
                <AnimatedText>
                    <h1 className="about-title">
                        SOFTWARE <br />
                        <span className="gradient-text">ENGINEER</span>
                    </h1>
                    <h1 className="about-title">
                        FULL-STACK <br />
                        <span className="gradient-text">DEVELOPER</span>
                    </h1>
                </AnimatedText>
                <div className="about-paragraph">
                    <p className="max-w-[630px] mx-auto">
                        Driven by a passion for{" "}
                        <mark className="highlight">machine learning</mark> and
                        innovation, I constantly explore new technologies to transform
                        ideas into seamless, engaging experiences that leave a lasting
                        impression. Currently a sophomore at{" "}
                        <mark className="highlight">
                            Indian Institute of Information Technology, Kottayam.
                        </mark>
                    </p>
                </div>
            </section>
            <section className="about-numbers">
                <div className="about-numbers_items">
                  <span className="about-numbers_num"><AnimatedNumberInView num={1} /></span>
                  <span className="about-numbers_details">YEARS OF <br/>EXPERIENCE</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num"><AnimatedNumberInView num={15}/></span>
                  <span className="about-numbers_details">PROJECTS <br/>COMPLETED</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num"><AnimatedNumberInView num={18}/></span>
                  <span className="about-numbers_details">TECHS <br/>MASTERED</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num !-tracking-[2px]"><AnimatedNumberInView num={230}/></span>
                  <span className="about-numbers_details">SUCCESSFUL <br/>COMMITS</span>
                </div>
            </section>
            <section className="about-buttons flex flex-col gap-5 items-center xs:flex-row justify-between">
                <Button variant="outline" className="!w-max backdrop-blur-md rounded-2xl !py-5 hover:bg-white-100 hover:text-primary hover:border-none">
                    <MapPinHouse />
                    <span>Kerala, India</span>
                </Button>
                <Button className="!w-max bg-white-100 text-primary hover:bg-primary hover:text-white !py-5 rounded-2xl">
                    <span>Contact Me</span>
                    <MoveUpRight />
                </Button>
            </section>
        </section>
    );
};

export default AboutPage;
