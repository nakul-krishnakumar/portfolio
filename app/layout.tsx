import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";

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
      <body
        className={`${poppins.variable} antialiased relative`}
      > 
        <div className="w-screen h-[50px] text-center bg-white-100 mb-7 sm:mb-24 md:mb-0">Navbar</div>
        <div className="flex flex-col items-center md:flex-row w-screen h-screen md:px-10 gap-5">
          <ProfileCard />
          <div className="md:self-start">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
