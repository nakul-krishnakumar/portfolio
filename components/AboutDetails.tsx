import AnimatedText from "./ui/typed";

const AboutDetails = () => {
  return (
    <section className="md:ml-[25rem]">
          <AnimatedText >
            <h1 className="about-title">SOFTWARE <br/><span className="gradient-text">ENGINEER</span></h1>
            <h1 className="about-title">FULL-STACK <br/><span className="gradient-text">DEVELOPER</span></h1>
          </AnimatedText>
        <p className="about-paragraph">Driven by a passion for <span className="highlight">machine learning</span> and innovation, I constantly explore new technologies to transform ideas into seamless, engaging experiences that leave a lasting impression. Currently a sophomore at <span className="highlight">Indian Institute of Information Technology, Kottayam.</span></p>
    </section>
  )
}

export default AboutDetails;