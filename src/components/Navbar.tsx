import { Brain, ContactRound, FolderCode, Trophy, User } from "lucide-react";
import { AnimatedBackground } from "@/src/components/ui/animated-background";
import Link from "next/link";

const Navbar = () => {
    const TABS = [
        {
            label: "About",
            icon: (
                <Link href="#home">
                    <User className="navbar_icons" />
                </Link>
            ),
        },
        {
            label: "Skills",
            icon: (
                <Link href="#skills">
                    <Brain className="navbar_icons" />
                </Link>
            ),
        },
        {
            label: "Projects",
            icon: (
                <Link href="#projects">
                    <FolderCode className="navbar_icons" />
                </Link>
            ),
        },
        {
            label: "Achievements",
            icon: (
                <Link href="#achievements">
                    <Trophy className="navbar_icons" />
                </Link>
            ),
        },
        {
            label: "Contact Me",
            icon: (
                <Link href="#contactme">
                    <ContactRound className="navbar_icons" />
                </Link>
            ),
        },
    ];

    return (
        <header className="w-full relative z-50">
            <nav className="w-full flex justify-center">
                <div className="fixed top-2 sm:top-3 pt-2 sm:pt-3">
                    <div className="flex w-full space-x-1 xs:space-x-2 sm:space-x-8 rounded-xl border border-zinc-950/10 bg-white/50 p-1.5 xs:p-2 backdrop-blur-sm">
                        <AnimatedBackground
                            defaultValue={TABS[0].label}
                            className="rounded-lg bg-primary-100"
                            transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.3,
                            }}
                        >
                            {TABS.map((tab) => (
                                <button
                                    key={tab.label}
                                    data-id={tab.label}
                                    type="button"
                                    className="group relative inline-flex h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 items-center justify-center transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white"
                                >
                                    {tab.icon}
                                    <div className="absolute -bottom-8 xs:-bottom-10 left-1/2 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
                                        <div className="rounded-md bg-white/80 px-2 py-1 xs:px-3 xs:py-1.5 tracking-wide text-[10px] xs:text-xs text-primary shadow-sm whitespace-nowrap">
                                            {tab.label}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </AnimatedBackground>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
