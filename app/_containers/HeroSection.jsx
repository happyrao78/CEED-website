import hero from "@/app/_assets/hero.png";
const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8">
      <div className="flex items-center justify-center pt-28 w-full h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[1.2rem] w-full max-w-5xl">
            <div className="flex items-center justify-center flex-col p-2 fill-color uppercase">
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl  md:text-7xl  xl:text-9xl">
                Creative
              </h1>
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-7xl  xl:text-9xl">
                Developer
              </h1>
            </div>
            <p className="font-semibold uppercase text-[#878787] max-w-lg md:max-w-2xl text-center text-sm md:text-base">
            Crafting digital excellence, from code to creativity, I develop, design, and elevate online experiences for business success.
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="flex items-start flex-col justify-start gap-1 absolute bottom-0 left-0 w-full font-mattone text-white text-[0.5rem] md:text-xs p-2 s:p-4 md:p-6">
              <p>// OPEN TO WORK</p>
              <p>YAKSHIT [2023]</p>
              <p>
                WEB DESIGNING, WEB DEVELOPMENT,
                <br />
                GRAPHIC DESIGNING, UI/UX DESIGNING
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full">
              <img loading="eager" src={hero.src} alt="hero" className="object-fit w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
