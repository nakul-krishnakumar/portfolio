"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import leetcodeLogo from '@/public/leetcode.svg'

const ProfileCard = () => {
    const [isSmallViewport, setIsSmallViewport] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallViewport(window.innerWidth < 640);
        };

        // Check initial width
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="profile-card">
            <div className="flex flex-col w-full items-center gap-2">
                {isSmallViewport ? (
                    <>
                        <Image
                            src="/avatar_sm.png"
                            alt="avatar"
                            width={240}
                            height={210}
                        />
                    </>
                ) : (
                    <>
                        <Image
                            src="/avatar.png"
                            alt="avatar"
                            width={240}
                            height={284}
                        />
                    </>
                )}
                <h2 className="profile-card_title">NAKUL KRISHNAKUMAR</h2>
            </div>
            <div className="flex flex-col w-full items-center gap-9">
                <p className="profile-card_desc">
                    A developer with a passion for innovation and a commitment
                    to excellence.
                </p>
                <div className="profile-card_socials">
                    <Link
                        href={
                            "https://www.linkedin.com/in/nakul-krishnakumar-9aa951282"
                        }
                        target="_"
                    >
                        <Linkedin className="profile-card_icons" />
                    </Link>
                    <Link
                        href={"https://www.instagram.com/nnnakuuul/"}
                        target="_"
                    >
                        <Instagram className="profile-card_icons" />
                    </Link>
                    <Link
                        href={"https://github.com/nakul-krishnakumar"}
                        target="_"
                    >
                        <Github className="profile-card_icons" />
                    </Link>
                    <Link
                        href={"mailto:nakulkrishnakumar86@gmail.com"}
                        target="_"
                    >
                        <Mail className="profile-card_icons" />
                    </Link>
                    {/* <Link href={"mailto:nakulkrishnakumar86@gmail.com"} target="_">
                        <Image src={leetcodeLogo} alt="Leetcode" className="profile-card_icons" />
                    </Link> */}
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
