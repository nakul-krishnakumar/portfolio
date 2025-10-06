import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="w-full lg:w-[38%] lg:fixed lg:h-screen flex items-center justify-center p-6 lg:p-8">
      <div className="w-full max-w-md bg-card rounded-2xl border-3 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] p-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border-3 border-foreground bg-primary/20 shadow-[4px_4px_0px_hsl(var(--foreground))]">
            <img
              src="/api/placeholder/400/400"
              alt="Nakul Krishnakumar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-center mb-2 tracking-tight">
          NAKUL KRISHNAKUMAR
        </h2>

        {/* Bio */}
        <p className="text-center text-muted-foreground mb-6 text-sm leading-relaxed">
          A developer with a passion for innovation and a commitment to excellence.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:-translate-y-1 transition-transform duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/nakul-krishnakumar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:-translate-y-1 transition-transform duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-foreground hover:-translate-y-1 transition-transform duration-200"
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
