import { GlobeAnimation } from "@/components/GlobeAnimation";
import Image from "next/image";

const SkillsPage = () => {
  return (
    <section id="skills" className="w-full px-3 text-center">
        <h1 className="font-bold text-[56px]">SKILLS</h1>
        <section className="grid grid-cols-1 grid-rows-6 sm:grid-cols-6 justify-center w-full h-[56rem] gap-1">

            <div className="skills-grid-item sm:col-span-4">
                <div className="skills-grid-item_icons">

                    <div className="flex flex-col items-center">
                        <Image src="/skills/front-end/nextjs.svg" alt="NextJS" width={50} height={50}/>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/skills/front-end/react.svg" alt="ReactJS" width={50} height={50}/>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/skills/front-end/tailwind.svg" alt="TailwindCSS" width={50} height={50}/>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/skills/front-end/bootstrap.svg" alt="Bootstrap" width={50} height={50}/>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/skills/front-end/mui.svg" alt="MaterialUI" width={50} height={50}/>
                    </div>
                </div>

                <div className="skills-grid-item_watermark">
                    <h2 className="skills-grid-item_watermark-text">FRONT END</h2>
                </div>

            </div>

            <div className="skills-grid-item sm:row-span-3 sm:col-span-2 hidden sm:block object-cover">
                <GlobeAnimation />
            </div>

            <div className="skills-grid-item sm:col-span-4">
                <div className="skills-grid-item_watermark">
                    <h2 className="skills-grid-item_watermark-text">BACK END</h2>
                </div>
            </div>

            <div className="skills-grid-item sm:row-span-3">
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
                <div className="skills-grid-item_watermark">
                    <h2 className="skills-grid-item_watermark-text !text-[55px] !2xl:text-[55px] flex sm:flex-col h-full items-center justify-center sm:leading-[45px]">
                        <span>L</span>
                        <span>A</span>
                        <span>N</span>
                        <span>G</span>
                        <span>U</span>
                        <span>A</span>
                        <span>G</span>
                        <span>E</span>
                        <span>S</span>
                    </h2>
                </div>
            </div>

            <div className="hidden sm:block skills-grid-item sm:col-span-2">
            </div>

            <div className="skills-grid-item sm:col-span-4 sm:row-span-2">
                <div className="skills-grid-item_watermark">
                    <h2 className="skills-grid-item_watermark-text">AI, ML & DL</h2>
                </div>
            </div>

            <div className="sm:hidden skills-grid-item sm:col-span-2">
            </div>
        </section>
    </section>
  )
}

export default SkillsPage;