import skills from "@/app/_assets/skills.png";
import { GiFlowerStar } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8"
    >
      <div className="flex items-center justify-center w-full pt-6 h-full max-w-screen-2xl border-t border-[#2e2e2e] mx-auto">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="flex items-start justify-start w-full h-full flex-col md:flex-row gap-[2rem] border-b border-[#2e2e2e] py-12">
            <div className="flex items-start justify-start w-full md:w-[50%] flex-col gap-2">
              <div className="flex flex-col h-full w-full items-start justify-start text-white">
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
                  SKILLS &
                </h1>
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
                  TECHNOLOGY
                </h1>
              </div>
              <div className="flex items-end justify-end w-full h-full pt-6">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex w-[65%] md:w-[50%] items-start justify-start">
                    <p className="text-[#a9a9a9] text-xs uppercase">
                    Proficient in cutting-edge technologies, I specialize in crafting captivating websites that not only captivate your audience but also seamlessly transform visitors into loyal customers.
                    </p>
                  </div>
                  <GiFlowerStar className="w-20 h-20 motion-safe:animate-spin-slow text-[#2e2e2e]" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-[50%]">
              <img
                src={skills.src}
                alt="skills"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-full grid md:grid-cols-3 items-center justify-start s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e]">
            <div className="w-full h-64 flex items-end justify-end p-4 s:pl-0 s:border-r border-b border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">REACT.JS / SVELTEKIT / NEXT.JS</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:border-r border-b border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
              <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">TAILWINDCSS / BOOTSTRAP</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:pl-4 s:pl-0 md:pr-0 border-b border-[#2e2e2e] md:border-r-0 s:border-r">
              <div className="w-full flex items-center justify-between text-white">
                <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">JAVASCRIPT / GSAP</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 pl-4 md:pl-0 md:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">NODE.JS / EXPRESS</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
              <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">FIREBASE / MONGODB</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:pr-0">
              <div className="w-full flex items-center justify-between text-white">
                <p className="w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">GIT /GITHUB</p>
                <BiFootball className="w-6 h-6 text-[#2e2e2e] animate-spin-slow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
