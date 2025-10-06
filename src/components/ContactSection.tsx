import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary to-secondary rounded-2xl border-3 border-foreground p-10 text-center shadow-[6px_6px_0px_hsl(var(--foreground))] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full" />
        
        <div className="relative z-10">
          <Mail className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
          <Button
            variant="sketch"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 border-2 border-foreground"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Send className="mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
