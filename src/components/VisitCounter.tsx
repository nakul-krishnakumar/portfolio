import { Eye, Users } from "lucide-react";
import { useEffect, useState } from "react";

const VisitCounter = () => {
    const [visitCount, setVisitCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVisitCount = async () => {
            try {
                // Multi-approach counter system
                const getStoredCount = () => {
                    const stored = localStorage.getItem(
                        "portfolio-visit-count"
                    );
                    return stored ? parseInt(stored, 10) : 0; // Starting with realistic number
                };

                const incrementCounter = () => {
                    const currentCount = getStoredCount();
                    const newCount = currentCount + 1;
                    localStorage.setItem(
                        "portfolio-visit-count",
                        newCount.toString()
                    );
                    return newCount;
                };

                // Check if this is a new session
                const isNewSession =
                    !sessionStorage.getItem("portfolio-visited");

                if (isNewSession) {
                    sessionStorage.setItem("portfolio-visited", "true");
                    const newCount = incrementCounter();
                    setVisitCount(newCount);

                    // Try multiple APIs for backup counting
                    const tryBackupApis = async () => {
                        const apis = [
                            "https://hits.dwyl.com/nakul-krishnakumar/portfolio.json",
                        ];

                        for (const api of apis) {
                            try {
                                const response = await fetch(api, {
                                    method: "GET",
                                    mode: "cors",
                                    cache: "no-cache",
                                });

                                if (response.ok) {
                                    const data = await response.json();
                                    const apiCount =
                                        data.value || data.count || data.hits;

                                    if (apiCount && apiCount > newCount) {
                                        setVisitCount(apiCount);
                                        localStorage.setItem(
                                            "portfolio-visit-count",
                                            apiCount.toString()
                                        );
                                        break;
                                    }
                                }
                            } catch (apiError) {
                                console.log(
                                    `API ${api} unavailable, trying next...`
                                );
                            }
                        }
                    };

                    tryBackupApis();
                } else {
                    // Return stored count for existing session
                    setVisitCount(getStoredCount());
                }
            } catch (error) {
                console.error("Error with visit counter:", error);
                // Fallback with realistic growing number
                // const fallbackCount =
                //     850 + (Math.floor(Date.now() / 100000) % 500);
                // setVisitCount(fallbackCount);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVisitCount();
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