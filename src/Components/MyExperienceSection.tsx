import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaHeadset,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

interface ExperienceItem {
  company: string;
  Icon: IconType;
  role: string;
  period: string;
  points: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "TechStudio Academy",
    Icon: FaChalkboardTeacher,
    role: "Full-Stack Developer — TechStudio Academy",
    period: "Nov 2025 – Present",
    points: [
      "Teach full-stack web development — HTML, CSS, JavaScript, React, Node.js and Git — to cohorts of 20–40 students.",
      "Build custom learning materials, assignments and assessments supporting beginner-to-intermediate paths.",
      "Run weekly code reviews and debugging sessions to reinforce clean code and logical thinking.",
      "Mentor students on portfolio building, project architecture and interview readiness.",
    ],
  },
  {
    company: "Samiway Educational Consult",
    Icon: FaLaptopCode,
    role: "Software Engineer — Samiway Educational Consult",
    period: "Aug 2024 – Sep 2025",
    points: [
      "Built and maintained a responsive online learning platform used by 500+ students with React, TypeScript and Tailwind CSS.",
      "Created 12+ reusable UI components — course cards, quizzes, progress bars, video players — cutting development time by 30%.",
      "Implemented role-based dashboards for students, instructors and admins, improving navigation and engagement by 40%.",
      "Worked with the backend team to optimise API integration and data flow, improving page load time by 25%.",
    ],
  },
  {
    company: "LIRS",
    Icon: FaHeadset,
    role: "IT Support Technician — Lagos Internal Revenue Service",
    period: "Sep 2023 – Oct 2024",
    points: [
      "Supported 150+ staff systems, maintaining 99% uptime across the department network and computer infrastructure.",
      "Diagnosed and resolved hardware, software and network issues, improving workflow efficiency by 35%.",
      "Assisted with system upgrades, printer configuration and software rollouts across multiple offices.",
      "Supported data backup and recovery operations, maintaining data integrity across the department.",
    ],
  },
  {
    company: "ICSL",
    Icon: FaCode,
    role: "Software Engineer Intern — ICSL",
    period: "Jun 2022 – Aug 2023",
    points: [
      "Led the front-end redesign of the customer self-service portal, improving mobile responsiveness and user satisfaction by 45%.",
      "Built interactive analytics dashboards for real-time billing and usage visualisation with React and Chart.js.",
      "Introduced a modular front-end architecture, reducing maintenance issues and bug frequency by 20%.",
      "Mentored 5+ junior developers on front-end practices, Git workflows and responsive design.",
    ],
  },
  {
    company: "Genius Camp",
    Icon: FaUsers,
    role: "Web Development Mentor — Genius Camp",
    period: "Nov 2021 – Dec 2022",
    points: [
      "Mentored 15+ junior developers on HTML, CSS, JavaScript, React and Git through one-on-one and group sessions.",
      "Designed and delivered 5 custom learning modules, raising mentee project completion rate by 60%.",
      "Ran live coding workshops and code reviews reinforcing clean code and problem-solving skills.",
    ],
  },
];

const MyExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-black px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] opacity-100 font-[Sora]"
    >
      <Reveal>
        <div className="text-center font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-white mb-8 lg:mb-[48px]">
          My <span className="font-extrabold">Experience</span>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 lg:gap-[24px]">
        {EXPERIENCE.map(({ company, Icon, role, period, points }, index) => {
          // Alternating fill, matching the reference — every other card is a
          // solid filled panel, the rest are outline-only against the black page.
          const filled = index % 2 === 1;

          return (
            <Reveal key={company} delay={index * 80}>
              <div
                className={`rounded-[16px] lg:rounded-[20px] p-6 lg:p-[32px] border transition-colors duration-300 ${
                  filled
                    ? "bg-[#1A1A1A] border-transparent hover:border-white/15"
                    : "bg-transparent border-white/15 hover:border-white/35"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 lg:gap-[14px]">
                    <span className="flex h-8 w-8 lg:h-[36px] lg:w-[36px] shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon size={16} className="text-black" />
                    </span>
                    <span className="font-bold text-white text-lg lg:text-[22px] leading-snug">
                      {role}
                    </span>
                  </div>
                  <span className="shrink-0 font-semibold text-white/90 text-sm lg:text-[15px] sm:text-right">
                    {period}
                  </span>
                </div>

                <ul className="mt-4 lg:mt-[20px] flex flex-col gap-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="grid grid-cols-[14px_minmax(0,1fr)] gap-3 text-white/60 text-[15px] lg:text-[16px] leading-relaxed"
                    >
                      <span aria-hidden="true" className="text-white/30">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default MyExperienceSection;
