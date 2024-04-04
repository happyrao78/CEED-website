import skills from "@/app/_assets/pgarg.png";
import { DiAptana } from "react-icons/di";
import { BiFootball } from "react-icons/bi";
const SkillsSection = () => {
  return (
    <section
      id="garg"
      className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8"
    >
      <div className="flex items-center justify-center w-full pt-6 h-full max-w-screen-2xl border-t border-[#2e2e2e] mx-auto">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="flex items-start justify-start w-full h-full flex-col md:flex-row gap-[2rem] border-b border-[#2e2e2e] py-12">
            <div className="flex items-start justify-start w-full md:w-[50%] flex-col gap-2">
              <div className="flex flex-col h-full w-full items-start justify-start text-red-500">
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-4xl sm:text-6xl md:text-5xl lg:text-6xl hover:text-yellow-500  transition ease-in-out duration-500 ">
                  WE ARE CEED
                </h1>
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">

                </h1>
              </div>
              <div className="flex items-end justify-end w-full h-full pt-6">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex w-[65%] md:w-[50%] items-start justify-start">
                    <p className="text-white text-2xl lg:text-4xl font-semibold uppercase w-full h-full hover:text-yellow-500 transition ease-in-out duration-500">
                      We are the Trailblazers of Innovation.<br></br>
                      We chase the next big idea with you!
                    </p>
                  </div>
                  <DiAptana className=" mt-[180px] w-[70px] h-[70px] animate-spin-slow text-[#f5c833]" />
                  <DiAptana className="w-[70px] h-[70px] animate-spin-slow text-[#e6e0e0]" />
                  <DiAptana className=" mt-[180px] w-[70px] h-[70px] animate-spin-slow text-[#f73030]" />
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-center w-full md:w-[50%]">
              <img
                src={skills.src}
                alt="skills"
                className="object-cover w-full h-full rounded-full hover:scale-105 transition ease-in-out duration-700"
              />
            </div>
          </div>
          <div id="people" className="w-full h-full grid md:grid-cols-3 items-center justify-start s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e]">

            <div className="w-full h-64 flex items-end justify-end p-4 s:pl-0 s:border-r border-b border-[#2e2e2e]">
              <div className="w-full  flex items-center justify-between text-white">
                <img className=" w-full rounded-full h-full object-cover  overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700 " src="https://cuceed.org/assets/images/IAS%20%20Hargunjeet%20Kaur.JPG" alt="hargunjeet"></img>
                <p className="w-[75%]  h-full font-bold font-mattone hover:text-yellow-500 text-xs sm:text-sm lg:text-base transition ease-in-out duration-500">Hargunjeet Kaur, IAS</p>

                <BiFootball className="w-10 h-10 flex text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:border-r border-b border-[#393838]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src="https://cuceed.org/assets/images/Gautam%20Jain%20IAS.jpeg" alt="gautam"></img>
                <p className="hover:text-yellow-500 transition ease-in-out duration-500 w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Gautam Jain, IAS</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:pl-4 s:pl-0 md:pr-0 border-b border-[#2e2e2e] md:border-r-0 s:border-r">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src="https://cuceed.org/assets/images/Ravinder%20Singh,%20London.jpeg" alt="hargunjeet"></img>
                <p className=" hover:text-yellow-500 transition ease-in-out duration-500 w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Dr. Ravinder Singh</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 pl-4 md:pl-0 md:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src="https://cuceed.org/assets/Vanitha%20Shankar.jpg" alt="hargunjeet"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Vanitha Shankar</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src="https://cuceed.org/assets/images/Sandeep%20Sahni.jpg" alt="hargunjeet"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Sandeep Sahni</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:pr-0">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src="https://cuceed.org/assets/Amulya%20Shukla.jpg" alt="hargunjeet"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Amulya Shukla</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
