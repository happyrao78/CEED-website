const ContactSection = () => {
  return (
    <section  id="contact" className="w-full flex items-center min-h-screen justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8">
      <div className="flex items-center justify-center pt-16 w-full h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[1.2rem] w-full">
            <div className="flex items-center justify-center flex-col p-2 text-white uppercase text-center">
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl  md:text-7xl">
                LOOKING FOR A
              </h1>
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-7xl">
                POWERFUL WEBSITE?
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-semibold uppercase text-[#878787] max-w-lg md:max-w-xl text-center text-sm md:text-base">
                WE DESIGN STUNNING WEBSITES THAT CAPTURE YOUR AUDIENCE'S
                ATTENTION AND CONVERT THEM INTO CUSTOMERS. OUR DESIGNS ARE CLEAN
                & MODERN.
              </p>
            </div>
            <div className="flex items-center justify-center">
            <a
              href="mailto:yakshitgarg25@gmail.com"
              className="bg-white hover:bg-transparent hover:border hover:border-white hover:text-white transition ease-in-out duration-500 border border-transparent rounded-full font-medium  flex items-center justify-center text-[#17191e] px-10 py-4 text-center text-lg"
            >
              Let's Connect
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
