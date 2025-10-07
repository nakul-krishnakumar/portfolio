import { TypeAnimation } from "react-type-animation";

const AnimatedTitle = () => {
    return (
        <div className="relative h-24 sm:h-32 flex items-center justify-center lg:justify-start overflow-hidden w-full">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                <TypeAnimation
                    sequence={[
                        "SOFTWARE\nENGINEER",
                        2000,
                        "FULL-STACK\nDEVELOPER",
                        2000,
                    ]}
                    wrapper="div"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    className="whitespace-pre-line"
                    style={{
                        display: "block",
                        background:
                            "linear-gradient(to right, hsl(var(--primary)) 30%, #9333ea 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                />
            </h1>
        </div>
    );
};

export default AnimatedTitle;
