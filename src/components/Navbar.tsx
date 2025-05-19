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
                <div className="fixed pt-3">
                    <div className="flex w-full space-x-2 sm:space-x-8 rounded-xl border border-zinc-950/10 bg-white/50 p-2 backdrop-blur-sm">
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
                                    className="group relative inline-flex h-9 w-9 items-center justify-center transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white"
                                >
                                    {tab.icon}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
                                        <div className="rounded-md bg-white/80 px-3 py-1.5 tracking-wide text-xs text-primary shadow-sm whitespace-nowrap ">
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
