import { SiGoogle, SiYoutube, SiApple } from "react-icons/si";
import type { IconType } from "react-icons";

// PLACEHOLDER CONTENT — copied straight from the reference design (Google /
// YouTube / Apple) so the layout could be built. Swap every entry below for
// your real roles before this goes live; nothing here should be mistaken
// for an actual work history.
interface ExperienceItem {
  company: string;
  Icon: IconType;
  iconBg: string;
  iconColor: string;
  role: string;
  period: string;
  description: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Google",
    Icon: SiGoogle,
    iconBg: "bg-white",
    iconColor: "text-[#4285F4]",
    role: "Lead Software Engineer at Google",
    period: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    company: "Youtube",
    Icon: SiYoutube,
    iconBg: "bg-[#FF0000]",
    iconColor: "text-white",
    role: "Software Engineer at Youtube",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    company: "Apple",
    Icon: SiApple,
    iconBg: "bg-[#0B0B0F]",
    iconColor: "text-white",
    role: "Junior Software Engineer at Apple",
    period: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];

const MyExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-black px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] opacity-100 font-[Sora]"
    >
      <div className="text-center font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-white mb-8 lg:mb-[48px]">
        My <span className="font-extrabold">Experience</span>
      </div>

      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 lg:gap-[24px]">
        {EXPERIENCE.map(({ company, Icon, iconBg, iconColor, role, period, description }, index) => {
          // Alternating fill, matching the reference — every other card is a
          // solid filled panel, the rest are outline-only against the black page.
          const filled = index % 2 === 1;

          return (
            <div
              key={company}
              className={`rounded-[16px] lg:rounded-[20px] p-6 lg:p-[32px] border ${
                filled
                  ? "bg-[#1A1A1A] border-transparent"
                  : "bg-transparent border-white/15"
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 lg:gap-[14px]">
                  <span
                    className={`flex h-8 w-8 lg:h-[36px] lg:w-[36px] shrink-0 items-center justify-center rounded-full ${iconBg}`}
                  >
                    <Icon size={18} className={iconColor} />
                  </span>
                  <span className="font-bold text-white text-lg lg:text-[22px] leading-snug">
                    {role}
                  </span>
                </div>
                <span className="shrink-0 font-semibold text-white/90 text-sm lg:text-[15px] sm:text-right">
                  {period}
                </span>
              </div>

              <p className="mt-4 lg:mt-[20px] text-white/60 text-[15px] lg:text-[16px] leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyExperienceSection;
