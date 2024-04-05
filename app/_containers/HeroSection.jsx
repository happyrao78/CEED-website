import hero from "@/app/_assets/skills.jpg";
import { DiReact } from "react-icons/di";

const HeroSection = () => {
  return (
    <section id="home" className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#b0aeae] p-2 sm:p-8">
      <div className="flex items-center justify-center pt-28 w-full h-full max-w-screen-2xl mx-auto">
      
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
        
          <div className="flex items-center justify-center flex-col gap-[1.2rem] w-full max-w-5xl">
          <DiReact className="w-[70px] h-[70px] text-[#e6e0e0] animate-spin-slow hover:text-green-500 transition ease-in-out duration-500"/>
            <div className="flex items-center justify-center flex-col p-2 fill-color uppercase">
              <h1 className="font-mattone font-bold text-xl xs:text-2xl s:text-3xl sm:text-4xl  md:text-4xl  xl:text-6xl text-white transition ease-in-out duration-500">
              <span className="text-red-600"> Chitkara University </span>
              Centre for Entrepreneurship Education & Development (cuceed)
              </h1>
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-7xl  xl:text-9xl">
             
              </h1>
            </div>
            <p className="font-semibold uppercase text-[#878787] max-w-lg md:max-w-2xl text-center text-sm md:text-base">
            
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="flex items-center justify-center w-full h-full">
            {/* <video controls src={hero} className="object-cover w-full h-[420px] rounded-3xl"></video> */}
              <img loading="eager" src={hero.src} alt="hero" className="object-cover w-full h-[320px] rounded-3xl hover:scale-90 transition ease-in-out duration-700 "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
