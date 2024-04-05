import floema from "@/app/_assets/innovest.png";
import aala from "@/app/_assets/i2.png";
import codingninjas from "@/app/_assets/techstars.png";
import happiness from "@/app/_assets/summit.png";
import marble from "@/app/_assets/marble.png";
import podcast from "@/app/_assets/podcast.png";
import Link from "next/link";
import TechnologySection from "./TechnologySection";
const projects = [
  {
    id: 1,
    title: "Innovest",
    description:
      "INNOVEST is the flagship event of Chitkara University effectuated by CEED.",
    image: floema.src,
    link: "https://floema-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Innovest 2.O",
    description:
      "The second season Chitkara University's flagship investment symposium, INNOVEST 2.O.",
    image: aala.src,
    // link: "https://aalav1.vercel.app/",
  },
  {
    id: 3,
    title: "Tech Stars",
    description:
      "Techstars, a 54 hour marathon facilitating students in unraveling ideas that address Real life issues.",
    image: codingninjas.src,
    // link: "https://coding-ninjas-cuiet.vercel.app/",
  },
  {
    id: 4,
    title: "National Entrepreneurship Summit 2023",
    description: "The CEED National Entrepreneurship Summit 2023 was recently inaugurated by respected dignitaries and key guests.",
    image: happiness.src,
    // link: "https://happiness-center.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "Marble Studio",
  //   description: "Exact Replica of Marble Studio Website from awwwards.com",
  //   image: marble.src,
  //   link: "https://marble-studio.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Podcast",
  //   description: "Podcast Website made from figma design(Virtual to Reality)",
  //   image: podcast.src,
  //   link: "https://podcast-tau-bay.vercel.app/",
  // },
];
const ProjectsSection = () => {
  return (
    <section
      id="events"
      className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8"
    >
      <div className="flex items-center justify-center w-full pt-14 h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[2.5rem] w-full">
            <div className="w-full flex items-start justify-start flex-col text-white hover:text-yellow-500 transition ease-in-out duration-500 uppercase">
              <h1 className="font-mattone font-bold text-xl  xs:text-2xl s:text-4xl md:text-5xl lg:text-6xl xl:text-[5.2rem] ">
                Incubating ideas, building leaders
              </h1>
            </div>
            <div className="grid md:grid-cols-2 items-center justify-start gap-[1.4rem] s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e] py-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-start justify-start flex-col gap-3 mb-12"
                >
                  {/* <Link href={project.link}> */}
                    <div className="flex items-center justify-center w-full h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt="demo"
                        className="object-cover h-full w-full  object-top aspect-[16/9] hover:scale-110 transition ease-in-out duration-700 rounded-3xl"
                      />
                    </div>
                  {/* </Link> */}
                  <div className="flex items-start justify-start w-full">
                    <p className="uppercase font-mattone font-bold text-xl lg:text-xl xl:text-xl text-yellow-500 transition ease-in-out duration-500">
                      {project.title}
                    </p>
                  </div>
                  <div className="flex items-start justify-start w-[85%] xl:w-[80%]">
                    <p className="uppercase text-[#979595] hover:text-white transition ease-in-out duration-500 font-semibold text-sm xl:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="services"
              className="flex items-center justify-center w-full lg:p-24"
            >
              <div className="flex items-center justify-center w-full flex-col gap-2">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      DEVELOPMENT
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      MENTORING
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      NETWORKING
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      INVESTMENT
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      BRANDING
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      ENTREPRENEURSHIP
                    </p>
                  </div>
                  
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      PITCHING
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      ANALYTICS
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                      TECHNOLOGY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <TechnologySection/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
