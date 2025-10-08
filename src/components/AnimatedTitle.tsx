import { TypeAnimation } from "react-type-animation";

const AnimatedTitle = () => {
    return (
        <div className="relative h-32 sm:h-40 lg:h-48 flex items-center justify-center lg:justify-start w-full py-4">
            <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-bold leading-tight text-center lg:text-left">
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
                        fontWeight: 800,
                    }}
                />
            </h1>
        </div>
    );
};

export default AnimatedTitle;
