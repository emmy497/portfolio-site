import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { href: "#", label: "React", Icon: FaReact },
    { href: "#", label: "Next.js", Icon: SiNextdotjs },
    { href: "#", label: "TypeScript", Icon: SiTypescript },
    { href: "#", label: "Python", Icon: FaPython },
    { href: "#", label: "Java", Icon: FaJava },
    { href: "#", label: "MySQL", Icon: SiMysql },
    { href: "#", label: "MongoDB", Icon: SiMongodb },
    { href: "#", label: "Tailwind CSS", Icon: SiTailwindcss },
    { href: "#", label: "Node.js", Icon: FaNodeJs },
  ];

  return (
    <section
      id="skills"
      className="px-4 py-10 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <div className="capitalize font-[400] text-center text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black">
        My <span className="font-extrabold">Skills</span>
      </div>

      <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-[32px] justify-items-center">
        {skills.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="group flex aspect-square w-full max-w-[161.5px] flex-col items-center justify-center gap-4 lg:gap-[32px] rounded-[4px] border-[2px] border-black bg-white p-4 lg:w-[161.5px] lg:h-[160px] lg:p-[24px] lg:aspect-auto opacity-100 text-black transition-all duration-200 hover:bg-black hover:text-white"
          >
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px] items-center justify-center rounded-[4px] bg-white text-black transition-colors duration-200 group-hover:bg-white group-hover:text-black">
              <Icon size={28} className="sm:hidden" />
              <Icon size={36} className="hidden sm:block" />
            </div>
            <span className="font-[Sora] text-center text-sm sm:text-base lg:text-[20px] font-bold capitalize leading-tight lg:leading-[24px] tracking-tight lg:tracking-[-0.02em] text-black transition-colors duration-200 group-hover:text-white">
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
