export default function TechnologySection() {
  return (
    <div id="collab" className="  w-full  py-5 overflow-hidden flex items-center justify-center bg-gray-100 opacity-[75%]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex-col items-center justify-start md:justify-around">
          <div className="w-full flex flex-col gap-y-15">
            <TechMarq key={0} />
            <TechMarq key={1} secRow={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

const TechMarq = ({ secRow }) => {
  const pics = !secRow
    ? ["java2", "swift2", "html2", "kotlin2","chai","path"]
    : [  ];
  return (
    <div className="marq-animation ">
      <div className="gap-10 relative flex overflow-hidden select-none w-screen marquee-hover:pause">
        <div
          style={secRow ? { animationDirection: "reverse" } : {}}
          className="marquee__content items-center flex justify-around gap-4 min-w-full w-full"
        >
          {pics.map((tech, i) => {
            return (
              <div className="w-full" key={i}>
                <img  src={`/images/techlogos/${tech}.png`} alt={tech} />
              </div>
            );
          })}
        </div>
        <div
          style={secRow ? { animationDirection: "reverse" } : {}}
          className="marquee__content items-center flex justify-around gap-4 min-w-full w-full"
        >
          {pics.map((tech, i) => {
            return (
              <div key={i}>
                <img src={`/images/techlogos/${tech}.png`} alt={tech} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
