import AnimatedText from "./ui/typed";

const AboutDetails = () => {
    return (
        <section className="md:ml-[25rem]">
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
            <p className="about-paragraph">
                Driven by a passion for{" "}
                <mark className="highlight">machine learning</mark> and
                innovation, I constantly explore new technologies to transform
                ideas into seamless, engaging experiences that leave a lasting
                impression. Currently a sophomore at{" "}
                <mark className="highlight">
                    Indian Institute of Information Technology, Kottayam.
                </mark>
            </p>
            <section className="about-numbers">
                <div className="about-numbers_items">
                  <span className="about-numbers_num">+1</span>
                  <span className="about-numbers_details">YEARS OF <br/>EXPERIENCE</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num">+15</span>
                  <span className="about-numbers_details">PROJECTS <br/>COMPLETED</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num">+18</span>
                  <span className="about-numbers_details">TECHS <br/>MASTERED</span>
                </div>

                <div className="about-numbers_items">
                  <span className="about-numbers_num !-tracking-[2px]">+230</span>
                  <span className="about-numbers_details">SUCCESSFUL <br/>COMMITS</span>
                </div>
            </section>
        </section>
    );
};

export default AboutDetails;
