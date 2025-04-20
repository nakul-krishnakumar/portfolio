import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import MeshGradientBackground from "@/components/ui/mesh-gradient-background";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = localFont({
    src: [
        {
            path: "./fonts/Poppins-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-Thin.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-Light.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/Poppins-ExtraLight.ttf",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Nakul Krishnakumar",
    description: "Software Developer Portfolio 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased relative`}>
                {/* Background layer */}
                <div className="fixed inset-0 overflow-hidden">
                    <MeshGradientBackground />
                </div>

                {/* Content layer */}
                <div className="relative z-10 overflow-x-hidden pb-[10rem]">
                    <Spotlight
                        className="bg-primary blur-[400px] -z-10"
                        size={256}
                        springOptions={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.1,
                        }}
                    />
                    <Navbar />
                    <div className="main-container">
                        <div className="child-wrapper" id="home">
                            <ProfileCard />
                            <div className="profile-card-skeleton"></div>
                            {children}
                            <Analytics />
                            <SpeedInsights />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
