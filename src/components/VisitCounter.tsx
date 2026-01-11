import { Eye, Users } from "lucide-react";
import { useEffect, useState } from "react";

const VisitCounter = () => {
    const [visitCount, setVisitCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("/api/visits")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setVisitCount(data.visits);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Eye className="h-4 w-4 animate-pulse" />
                <span>Loading visits...</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors group">
            <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">
                {visitCount?.toLocaleString()} visit
                {visitCount !== 1 ? "s" : ""}
            </span>
        </div>
    );
};

export default VisitCounter;