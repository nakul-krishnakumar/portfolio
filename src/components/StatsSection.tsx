import NumberTicker from "@/components/magicui/number-ticker";
import { motion } from "framer-motion";

interface StatProps {
    value: string;
    numericValue: number;
    label: string;
    delay: number;
}

const StatCard = ({ value, numericValue, label, delay }: StatProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className="bg-card rounded-xl border-2 border-foreground p-6 text-center shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--primary))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
        >
            <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                {value.startsWith("+") && <span className="mr-1">+</span>}
                <NumberTicker
                    value={numericValue}
                    delay={delay}
                    className="text-4xl font-bold text-primary"
                />
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {label}
            </div>
        </motion.div>
    );
};

const StatsSection = () => {
    const stats = [
        { value: "+1", numericValue: 1, label: "Years of Experience" },
        { value: "+2", numericValue: 2, label: "Hackathon Wins" },
        { value: "+20", numericValue: 20, label: "Opensource PRs Merged" },
        { value: "+350", numericValue: 350, label: "Successful Commits" },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
                <StatCard
                    key={stat.label}
                    value={stat.value}
                    numericValue={stat.numericValue}
                    label={stat.label}
                    delay={index * 0.2}
                />
            ))}
        </div>
    );
};

export default StatsSection;
