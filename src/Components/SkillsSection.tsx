import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import Reveal from "./Reveal";

const SkillsSection = () => {
  // The stack listed on the CV, plus MongoDB from the WorkNest build.
  const skills = [
    { label: "React", Icon: FaReact },
    { label: "TypeScript", Icon: SiTypescript },
    { label: "JavaScript", Icon: SiJavascript },
    { label: "Redux", Icon: SiRedux },
    { label: "Tailwind CSS", Icon: SiTailwindcss },
    { label: "Node.js", Icon: FaNodeJs },
    { label: "Python", Icon: FaPython },
    { label: "MongoDB", Icon: SiMongodb },
    { label: "MySQL", Icon: SiMysql },
    { label: "Git", Icon: FaGitAlt },
  ];

  return (
    <section
      id="skills"
      className="px-4 py-10 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <Reveal>
        <div className="capitalize font-[400] text-center text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black">
          My <span className="font-extrabold">Skills</span>
        </div>
      </Reveal>

      <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-[32px] justify-items-center">
        {skills.map(({ label, Icon }, index) => (
          <Reveal
            key={label}
            delay={index * 60}
            className="w-full max-w-[161.5px]"
          >
            <div className="group flex aspect-square w-full flex-col items-center justify-center gap-4 lg:gap-[32px] rounded-[4px] border-[2px] border-black bg-white p-4 lg:h-[160px] lg:p-[24px] lg:aspect-auto opacity-100 text-black transition-all duration-200 hover:bg-black hover:text-white">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px] items-center justify-center rounded-[4px] bg-white text-black transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                <Icon size={28} className="sm:hidden" />
                <Icon size={36} className="hidden sm:block" />
              </div>
              <span className="font-[Sora] text-center text-sm sm:text-base lg:text-[20px] font-bold capitalize leading-tight lg:leading-[24px] tracking-tight lg:tracking-[-0.02em] text-black transition-colors duration-200 group-hover:text-white">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
