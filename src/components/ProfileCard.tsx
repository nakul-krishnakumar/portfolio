import { Code2, Github, Linkedin, Mail, MapPin } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="w-full lg:w-[38%] lg:fixed lg:h-screen flex items-center justify-center p-4 lg:p-6 mt-24 lg:mt-0">
            <div className="w-full max-w-sm bg-card rounded-2xl border-3 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] p-6 animate-fade-in">
                {/* Profile Image */}
                <div className="relative mb-5">
                    <div className="w-4/5 mx-auto aspect-[4/5] rounded-2xl overflow-hidden border-3 border-foreground bg-primary/20 shadow-[4px_4px_0px_hsl(var(--foreground))]">
                        <img
                            src="./profile-card3.svg"
                            alt="Nakul Krishnakumar"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-center mb-2 tracking-tight">
                    NAKUL KRISHNAKUMAR
                </h2>

                {/* Bio */}
                <p className="text-center text-muted-foreground mb-5 text-sm leading-relaxed">
                    Eager to learn, passionate to innovate, driven to succeed.
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-5 mb-5">
                    <a
                        href="https://www.linkedin.com/in/nakul-krishnakumar-9aa951282/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:-translate-y-1 transition-transform duration-200 hover:text-primary"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href="https://github.com/nakul-krishnakumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:-translate-y-1 transition-transform duration-200 hover:text-primary"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://codolio.com/profile/nakul-krishnakumar/problemSolving"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:-translate-y-1 transition-transform duration-200 hover:text-primary"
                    >
                        <Code2 className="h-6 w-6" />
                    </a>
                    <a
                        href="mailto:nakulkrishnakumar86@gmail.com"
                        className="text-foreground hover:-translate-y-1 transition-transform duration-200 hover:text-primary"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Kerala, India</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
