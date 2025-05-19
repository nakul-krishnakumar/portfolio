import { GlobeAnimation } from "@/src/components/GlobeAnimation";
import Image from "next/image";

const SkillsSection = () => {
    return (
        <section id="skills" className="w-full px-3 md:px-5 text-center">
            <h1 className="font-bold text-[42px] sm:text-[56px] mb-6 sm:mb-10">
                SKILLS
            </h1>
            <section className="grid grid-cols-1 grid-rows-auto sm:grid-cols-6 justify-center w-full max-w-[1400px] mx-auto min-h-[30rem] sm:h-[56rem] gap-2 sm:gap-3">
                <div className="skills-grid-item sm:col-span-4">
                    <div className="skills-grid-item_icons">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=nextjs"
                                alt="NextJS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                NextJS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=react"
                                alt="ReactJS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                ReactJS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=tailwind"
                                alt="TailwindCSS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                TailwindCSS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=bootstrap"
                                alt="Bootstrap"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Bootstrap
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=materialui"
                                alt="MaterialUI"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                MUI
                            </span>
                        </div>
                    </div>

                    <div className="skills-grid-item_watermark">
                        <h2 className="skills-grid-item_watermark-text">
                            FRONT END
                        </h2>
                    </div>
                </div>

                <div className="skills-grid-item sm:row-span-3 sm:col-span-2 hidden sm:block object-cover">
                    <GlobeAnimation />
                </div>

                <div className="skills-grid-item sm:col-span-4 flex justify-center items-center">
                    <div className="grid grid-rows-2 grid-cols-3 xs:grid-cols-4 gap-2 py-3 px-2 sm:py-4 sm:px-4 justify-items-center items-center backdrop-blur-[2px] rounded-2xl xs:skills-grid-item_icons">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=nodejs"
                                alt="NodeJS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                NodeJS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=express"
                                alt="ExpressJS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                ExpressJS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                className="bg-[#242938] p-2 rounded-sm"
                                src="/ejs.svg"
                                alt="EJS"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                EJS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=supabase"
                                alt="Supabase"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                Supabase
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=postgresql"
                                alt="PostgreSQL"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                PostgreSQL
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=mongodb"
                                alt="MongoDB"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                MongoDB
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=mysql"
                                alt="MySQL"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[12px] 2xl:text-[16px]">
                                MySQL
                            </span>
                        </div>
                    </div>

                    <div className="skills-grid-item_watermark">
                        <h2 className="skills-grid-item_watermark-text">
                            BACK END
                        </h2>
                    </div>
                </div>

                <div className="skills-grid-item sm:row-span-3">
                    <div className="skills-grid-item_icons !pt-0 sm:flex-col">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=docker"
                                alt="Docker"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Docker
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=postman"
                                alt="Postman"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Postman
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=git"
                                alt="Git"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Git
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=github"
                                alt="GitHub"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                GitHub
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=sentry"
                                alt="Sentry"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Sentry
                            </span>
                        </div>
                    </div>

                    <div className="skills-grid-item_watermark">
                        <h2 className="skills-grid-item_watermark-text flex sm:flex-col h-full items-center justify-center sm:leading-[85px]">
                            <span>T</span>
                            <span>O</span>
                            <span>O</span>
                            <span>L</span>
                            <span>S</span>
                        </h2>
                    </div>
                </div>

                <div className="sm:block skills-grid-item sm:row-span-3">
                    <div className="skills-grid-item_icons !pt-0 sm:flex-col">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=tensorflow"
                                alt="Tensorflow"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Tensorflow
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=sklearn"
                                alt="SKLearn"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                SKLearn
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                className="bg-[#242938] p-2 rounded-sm"
                                src="/numpy.svg"
                                alt="NumPy"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                NumPy
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                className="bg-[#242938] p-2 rounded-sm"
                                src="/pandas.svg"
                                alt="Pandas"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Pandas
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=opencv"
                                alt="OpenCV"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                OpenCV
                            </span>
                        </div>
                    </div>

                    <div className="skills-grid-item_watermark">
                        <h2 className="skills-grid-item_watermark-text !text-[55px] flex sm:flex-col h-full items-center justify-center sm:leading-[90px]">
                            <span>AI</span>
                            <span>ML</span>
                            <span>&</span>
                            <span>DL</span>
                        </h2>
                    </div>
                </div>

                <div className="hidden sm:block skills-grid-item sm:col-span-2"></div>

                <div className="skills-grid-item sm:col-span-4 sm:row-span-2">
                    <div className="grid grid-cols-3 xs:grid-cols-4 grid-rows-2 gap-2 sm:gap-3 px-2 xs:px-4 py-3 sm:py-10 sm:px-20 justify-center items-center h-full backdrop-blur-[2px] rounded-2xl">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=js"
                                alt="Javascript"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                JS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=ts"
                                alt="Typescript"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                TS
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=py"
                                alt="Python"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Python
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=c"
                                alt="C"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                C
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=cpp"
                                alt="C++"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                C++
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=go"
                                alt="Go"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Go
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=java"
                                alt="Java"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                Java
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                src="https://skillicons.dev/icons?i=php"
                                alt="PHP"
                                width={40}
                                height={40}
                            />
                            <span className="font-bold text-white/60 text-[10px] sm:text-[14px] 2xl:text-[18px]">
                                PHP
                            </span>
                        </div>
                    </div>

                    <div className="skills-grid-item_watermark">
                        <h2 className="skills-grid-item_watermark-text">
                            LANGUAGES
                        </h2>
                    </div>
                </div>

                <div className="sm:hidden skills-grid-item sm:col-span-2"></div>
            </section>
        </section>
    );
};

export default SkillsSection;
